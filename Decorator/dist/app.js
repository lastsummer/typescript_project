var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log('constructor-->', constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (constructor) {
        console.log('Rendering template...');
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Summer';
        console.log('Creating person object...');
    }
};
Person = __decorate([
    Logger('LOGGING'),
    WithTemplate('<h1>My Person Object<h1>', 'app')
], Person);
const pers = new Person();
console.log(pers);
// ---
function Log(target, propertyName) {
    console.log('Property Decorator!');
    console.log(target, propertyName);
}
function Log2(target, propertyName, descriptor) {
    console.log('Accessor Decorator!');
    console.log(target);
    console.log(propertyName);
    console.log(descriptor);
}
function Log3(target, propertyName, descriptor) {
    console.log('Method Decorator!');
    console.log(target);
    console.log(propertyName);
    console.log(descriptor);
}
function Log4(target, propertyName, position) {
    console.log('Parameter Decorator!');
    console.log(target);
    console.log(propertyName);
    console.log(position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid price - should be positive!');
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
// ----
function WithTemplateNew(template, hookId) {
    console.log('TEMPLATE FACTORY');
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(...args) {
                super();
                console.log('Rendering template...');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
let PersonNew = class PersonNew {
    constructor() {
        this.name = 'Summer';
        console.log('Creating person object...');
    }
};
PersonNew = __decorate([
    WithTemplateNew('<h1>My Person Object<h1>', 'app2')
], PersonNew);
const perTest = new PersonNew();
// ---
function Autobind(target, propertyName, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        value: function () {
            originalMethod.call(this);
        }
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = 'This works!';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector('button');
button.addEventListener('click', p.showMessage.bind(p));
const registeredValidators = {};
function Required(target, propName) {
    var _a;
    const oldValidator = ((_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) ? registeredValidators[target.constructor.name][propName] : [];
    console.log(oldValidator);
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [...oldValidator, 'required'] });
}
function PositiveNumber(target, propName) {
    var _a;
    const oldValidator = ((_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) ? registeredValidators[target.constructor.name][propName] : [];
    console.log(oldValidator);
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [...oldValidator, 'positive'] });
}
function validate(obj) {
    const objValidateConfig = registeredValidators[obj.constructor.name];
    if (!objValidateConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidateConfig) {
        for (const validator of objValidateConfig[prop]) {
            console.log(prop);
            console.log(validator);
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    Required,
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector('form');
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title');
    const priceEl = document.getElementById('price');
    const title = titleEl.value;
    const price = +priceEl.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert('Invilid input, please try again!');
        return;
    }
    console.log(createdCourse);
});
//# sourceMappingURL=app.js.map