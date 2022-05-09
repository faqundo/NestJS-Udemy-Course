import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private httpService;
    constructor(appService: AppService, httpService: HttpService);
    getAllCommits(): Observable<any>;
    getHello(): string;
}
