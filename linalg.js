
var errors = {
	invalidArgument: 'Invalid function argument.',
	scalarDivisionByZero: 'Scalar division by zero not allowed.',
	pointwiseDivisionByZero: 'Pointwise division by zero not allowed.',
}

class Vec2 {
    constructor(x, y) {
        this._x = x;
        this._y = y;
        this._type = this.constructor.name;
    }

    get type() { return this._type; }
    get x() { return this._x; }
    get y() { return this._y; }
    get length() { return Math.sqrt(this._x * this._x + this._y * this._y); }
    get lengthSqr() { return this._x * this._x + this._y * this._y; }
    get neg() { return new this.constructor(-this._x, -this._y); }
    get isZero() { return this._x === 0 && this._y === 0; }
    get toString() { return `${ this.type }(${ this._x }, ${ this._y })`; }

    equals(other) {
        if (typeof(other) === 'object' && other.constructor !== undefined && other.type === this.type) {
            return this._x === other.x && this._y === other.y;
        } else throw errors.invalidArgument;
	}
    mul(other) {
        switch(typeof(other)) {
            case 'number':
                return new this.constructor(this._x * other, this._y * other);
            case 'object':
                if (other.constructor !== undefined && other.type === this.type) {
                    return new this.constructor(this._x * other.x, this._y * other.y);
                } else throw errors.invalidArgument;
            default: throw errors.invalidArgument;
        }
    }
    div(other) {
        switch(typeof(other)) {
            case 'number':
                if (other === 0) throw errors.scalarDivisionByZero;
                return new this.constructor(this._x / other, this._y / other);
            case 'object':
                if (other.constructor !== undefined && other.type === this.type) {
                    if (other.x === 0 || other.y === 0) throw errors.pointwiseDivisionByZero;
                    return new this.constructor(this._x / other.x, this._y / other.y);
                } else throw errors.invalidArgument;
            default: throw errors.invalidArgument;
        }
    }
    add(other) {
        if (typeof(other) === 'object' && other.constructor !== undefined && other.type === this.type) {
            return new this.constructor(this._x + other.x, this._y + other.y);
        } else throw errors.invalidArgument;
    }


    sub(other) {
        if (typeof(other) === 'object' && other.constructor !== undefined && other.type === this.type) {
            return new this.constructor(this._x - other.x, this._y - other.y);
        } else throw errors.invalidArgument;
    }
    dot(other) {
        if (typeof(other) === 'object' && other.constructor !== undefined && other.type === this.type) {
            return this._x * other.x + this._y * other.y;
        }
    }

};

class Vec3 {
    constructor(x, y, z) {
        this._x = x;
        this._y = y;
        this._z = z;
        this._type = this.constructor.name;
    }

    get type() { return this._type; }
    get x() { return this._x; }
    get y() { return this._y; }
    get z() { return this._z; }
    get length() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z); }
    get lengthSqr() { return this._x * this._x + this._y * this._y + this._z * this._z; }
    get neg() { return new this.constructor(-this._x, -this._y, -this._z); }
    get isZero() { return this._x === 0 && this._y === 0 && this._z === 0; }
    get toString() { return `${ this.type }(${ this._x }, ${ this._y }, ${ this._z })`; }

    equals(other) {
        if (typeof(other) === 'object' && other.constructor !== undefined && other.type === this.type) {
            return this._x === other.x && this._y === other.y && this._z === other.z;
        } else throw errors.invalidArgument;
    }
    mul(other) {
        switch(typeof(other)) {
            case 'number':
                return new this.constructor(this._x * other, this._y * other, this._z * other);
            case 'object':
                if (other.constructor !== undefined && other.type === this.type) {
                    return new this.constructor(this._x * other.x, this._y * other.y, this._z * other.z);
                } else throw errors.invalidArgument;
            default: throw errors.invalidArgument;
        }
    }
    div(other) {
        switch(typeof(other)) {
            case 'number':
                if (other === 0) throw errors.scalarDivisionByZero;
                return new this.constructor(this._x / other, this._y / other, this._z / other);
            case 'object':
                if (other.constructor !== undefined && other.type === this.type) {
                    if (other.x === 0 || other.y === 0) throw errors.pointwiseDivisionByZero;
                    return new this.constructor(this._x / other.x, this._y / other.y, this._z / other.z);
                } else throw errors.invalidArgument;
            default: throw errors.invalidArgument;
        }
    }
    add(other) {
        if (typeof(other) === 'object' && other.constructor !== undefined && other.type === this.type) {
            return new this.constructor(this._x + other.x, this._y + other.y, this._z + other.z);
        } else throw errors.invalidArgument;
    }


    sub(other) {
        if (typeof(other) === 'object' && other.constructor !== undefined && other.type === this.type) {
            return new this.constructor(this._x - other.x, this._y - other.y, this._z - other.z);
        } else throw errors.invalidArgument;
    }
    dot(other) {
        if (typeof(other) === 'object' && other.constructor !== undefined && other.type === this.type) {
            return this._x * other.x + this._y * other.y + this._z * other.z;
        }
    }

};

class Vec4 {
    constructor(x, y, z, w) {
        this._x = x;
        this._y = y;
        this._z = z;
        this._w = w;
        this._type = this.constructor.name;
    }

    get type() { return this._type; }
    get x() { return this._x; }
    get y() { return this._y; }
    get z() { return this._z; }
    get w() { return this._w; }
    get length() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w); }
    get lengthSqr() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w; }
    get neg() { return new this.constructor(-this._x, -this._y, -this._z, -this._w); }
    get isZero() { return this._x === 0 && this._y === 0 && this._z === 0 && this._w === 0; }
    get toString() { return `${ this.type }(${ this._x }, ${ this._y }, ${ this._z }, ${ this._w })`; }

    equals(other) {
        if (typeof(other) === 'object' && other.constructor !== undefined && other.type === this.type) {
            return this._x === other.x && this._y === other.y && this._z === other.z && this._w === other.w;
        } else throw errors.invalidArgument;
    }
    mul(other) {
        switch(typeof(other)) {
            case 'number':
                return new this.constructor(this._x * other, this._y * other, this._z * other, this._w * other);
            case 'object':
                if (other.constructor !== undefined && other.type === this.type) {
                    return new this.constructor(this._x * other.x, this._y * other.y, this._z * other.z, this._w * other.w);
                } else throw errors.invalidArgument;
            default: throw errors.invalidArgument;
        }
    }
    div(other) {
        switch(typeof(other)) {
            case 'number':
                if (other === 0) throw errors.scalarDivisionByZero;
                return new this.constructor(this._x / other, this._y / other, this._z / other, this._w / other);
            case 'object':
                if (other.constructor !== undefined && other.type === this.type) {
                    if (other.x === 0 || other.y === 0) throw errors.pointwiseDivisionByZero;
                    return new this.constructor(this._x / other.x, this._y / other.y, this._z / other.z, this._w / other.w);
                } else throw errors.invalidArgument;
            default: throw errors.invalidArgument;
        }
    }
    add(other) {
        if (typeof(other) === 'object' && other.constructor !== undefined && other.type === this.type) {
            return new this.constructor(this._x + other.x, this._y + other.y, this._z + other.z, this._w + other.w);
        } else throw errors.invalidArgument;
    }


    sub(other) {
        if (typeof(other) === 'object' && other.constructor !== undefined && other.type === this.type) {
            return new this.constructor(this._x - other.x, this._y - other.y, this._z - other.z, this._w - other.w);
        } else throw errors.invalidArgument;
    }
    dot(other) {
        if (typeof(other) === 'object' && other.constructor !== undefined && other.type === this.type) {
            return this._x * other.x + this._y * other.y + this._z * other.z + this._w * other.w;
        }
    }

};