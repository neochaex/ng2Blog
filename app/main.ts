//Bootstrapping is platform-specific. Usually using browser, but sometimes the component can be loaded on a mobile device with Apache Cordova or NativeScript. 
import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
//root component
bootstrap(AppComponent);