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
