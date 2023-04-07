import { NewsData } from "./news-data";

export class ResponseBody {
    category: string = "";
    data: NewsData[] = [];
    success: boolean = false;
}
