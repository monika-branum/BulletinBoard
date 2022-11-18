const SUPABASE_URL = 'https://uqwstvnsesaenalrdjyp.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxd3N0dm5zZXNhZW5hbHJkanlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwMjYsImV4cCI6MTk4MzY4NDAyNn0.bZ660DcBSXEiAg5PHlsCACk9kEfmD8_HYAnhjOB69Vo';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

//home page//
export async function fetchPosts() {
    const response = await client.from('bulletin').select('*');
    return response.data;
}

//create page//
export async function createNewPost(post) {
    const response = await client.from('bulletin').insert(post);
    if (response.data) {
        return response.data;
    } else {
        console.error(response.error);
    }
}

//auth//
export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function redirectIfLoggedIn() {
    const user = getUser();

    if (user) location.replace('../create');
}

export function checkAuth() {
    const user = getUser();
    if (!user) location.replace('/');
}

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }
}

export async function logOut() {
    await client.auth.signOut();
    return (window.location.href = '/');
}
