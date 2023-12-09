import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";


export class HeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("req:",req);
    // if (!req.url.match('intercept')) {
    //   return next.handle(req);
    // }
    // req = req.clone({
    //   headers: req.headers.set('ClonedHeaders', 'a')
    // });
    // req = req.clone({
    //   headers: req.headers.set('ClonedHeaders2', 'b')
    // });
    return next.handle(req);
  }
}
