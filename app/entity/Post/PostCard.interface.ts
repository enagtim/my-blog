export interface IPostCard {
	tag: string;
	publication: number;
	like: number;
	title: string;
	description: string;
	timeRead: number;
}
export interface Posts {
	posts: IPostCard[];
}
