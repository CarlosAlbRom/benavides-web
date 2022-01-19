export interface IArticle{
    id_article: number;
    name: string;
    code: string;
    image_url: string;
    id_category: number;
    id_department: number;
    description: string;
    price: number;
    featured: boolean;
}
