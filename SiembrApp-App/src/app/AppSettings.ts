import { environment } from './../environments/environment.prod';

export class AppSettings{
    public static APIURL: string = environment.API_URL;
}
