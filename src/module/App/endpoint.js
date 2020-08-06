const baseUrl = 'https://api.github.com/users';

const forks = url => fetch(url)
    .then(response => response.json())
    .then(json => json.map(item => ({
        id: item.id,
        url: item['html_url'],
        owner: item.owner.login,
        avatar: item.owner['avatar_url'],
    })))
    .then(forks => forks.reverse().slice(0, 3));

const tags = object => Object.keys(object).map(key => object[key].language).filter(item => item !== null);

const parse = async item => ({
    id: item.id,
    forks: await forks(item['forks_url']),
    tags: tags(item.files),
    url: item['html_url'],
    description: item.description,
    owner: item.owner.login,
    avatar: item.owner['avatar_url'],
});

export const search = user => fetch(`${baseUrl}/${user}/gists`)
    .then(response => {
        if (!response.ok) throw response;
        return response.json();
    })
    .then(json => {
        if (!Array.isArray(json)) throw json;

        return Promise.all(json.map(item => parse(item)));
    });
