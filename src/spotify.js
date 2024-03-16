//user taken to login page after cliking button
export const authEndpoint = "https://accounts.spotify.com/authorize";

//homepage onces logged in
const redirectUri = "http://localhost:3000/";

const cliendId="ba1bc611f618406aa5481086caa25fc8";

//things we r borrowing from spotify - current permissions
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'
];

//pulling the access token from the url
export const loginUrl = `${authEndpoint}?client_id=${cliendId}&redirect_uri=${redirectUri}&scopes=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;

//pulling the access token from the url
export const getTokenFromUrl = ()=>{
    return window.location.hash
    .substring(1) //choping the url
    .split('&') //splitting the url
    //url=reddrinkisgood&name=ruki
    //splitting from = and &
    .reduce((initial,item)=>{
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}


