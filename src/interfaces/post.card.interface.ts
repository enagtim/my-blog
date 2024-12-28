export interface IPostCard {
	id: number;
	title: string;
	body: string;
	tags: string[];
	reactions: {
		likes: number;
		dislikes: number;
	};
}
export interface IPosts {
	posts: IPostCard[];
}
