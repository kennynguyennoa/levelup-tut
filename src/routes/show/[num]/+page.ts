import type { PageLoad } from "./$types";

export type dataProp = {
    episode: {
        date: number;
        displayDate: string;
        slug: string;
        title: string;
        html: HTMLAllCollection;
    };
}

export const load: PageLoad = async ({fetch, params}) => {
    const res: Response = await fetch(`https://syntax.fm/api/shows/${params.num}`);
    const data: dataProp = await res.json();
    
    return {
        episode: data
    }
}