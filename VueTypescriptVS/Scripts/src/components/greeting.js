var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as Vue from 'vue';
import Component from 'vue-class-component';
// The @Component decorator indicates the class is a Vue component
let Greeting = class Greeting extends Vue {
    // The @Component decorator indicates the class is a Vue component
    constructor() {
        super(...arguments);
        // Initial data can be declared as instance properties
        this.greeting = 'Hello!';
    }
    // Component methods can be declared as instance methods
    onClick() {
        window.alert(this.greeting);
    }
};
Greeting = __decorate([
    Component({
        // All component options are allowed in here
        template: '<h1>{{ greeting }}</h1>'
    })
], Greeting);
export default Greeting;
//# sourceMappingURL=greeting.js.map