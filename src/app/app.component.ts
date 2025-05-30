import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { filter, Subscription } from 'rxjs';
import { ModalService } from './services/modal.service';
import { ModalPromotionsComponent } from './components/modal-promotions/modal-promotions.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router!: Subscription;
    @ViewChild(NavbarComponent) navbar!: NavbarComponent;
    @ViewChild(ModalPromotionsComponent) actividadesModal!: ModalPromotionsComponent;

    constructor(private renderer: Renderer2, private router: Router, @Inject(DOCUMENT,) private document: any, private element: ElementRef, public location: Location, private modalService: ModalService) { }
    ngOnInit() {

        var navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.pipe(
            filter((event): event is NavigationEnd => event instanceof NavigationEnd)
        ).subscribe(event => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            } else {
                (window.document.activeElement as HTMLElement).scrollTop = 0;
            }
            this.navbar.sidebarClose();
        });
        this.renderer.listen('window', 'scroll', (event) => {
            const number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            } else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version!) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');

        }
        // Esperamos a que Angular termine la inicialización
        setTimeout(() => {
            this.modalService.mostrarModalActividades();
        }, 500); // Pequeño retraso para asegurar la renderización

}
removeFooter() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);
    if (titlee === 'signup' || titlee === 'nucleoicons') {
        return false;
    }
    else {
        return true;
    }
}
}
