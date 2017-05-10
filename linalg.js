
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
    get toString() { return `${ this._type }(${ this._x }, ${ this._y })`; }

    equals(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return this._x === other.x && this._y === other.y;
        } else throw errors.invalidArgument;
	}
    mul(other) {
        switch(typeof(other)) {
            case 'number':
                return new this.constructor(this._x * other, this._y * other);
            case 'object':
                if (other.type === this._type) {
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
                if (other.type === this._type) {
                    if (other.x === 0 || other.y === 0) throw errors.pointwiseDivisionByZero;
                    return new this.constructor(this._x / other.x, this._y / other.y);
                } else throw errors.invalidArgument;
            default: throw errors.invalidArgument;
        }
    }
    add(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return new this.constructor(this._x + other.x, this._y + other.y);
        } else throw errors.invalidArgument;
    }


    sub(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return new this.constructor(this._x - other.x, this._y - other.y);
        } else throw errors.invalidArgument;
    }
    dot(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
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
    get toString() { return `${ this._type }(${ this._x }, ${ this._y }, ${ this._z })`; }

    equals(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return this._x === other.x && this._y === other.y && this._z === other.z;
        } else throw errors.invalidArgument;
    }
    mul(other) {
        switch(typeof(other)) {
            case 'number':
                return new this.constructor(this._x * other, this._y * other, this._z * other);
            case 'object':
                if (other.type === this._type) {
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
                if (other.type === this._type) {
                    if (other.x === 0 || other.y === 0) throw errors.pointwiseDivisionByZero;
                    return new this.constructor(this._x / other.x, this._y / other.y, this._z / other.z);
                } else throw errors.invalidArgument;
            default: throw errors.invalidArgument;
        }
    }
    add(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return new this.constructor(this._x + other.x, this._y + other.y, this._z + other.z);
        } else throw errors.invalidArgument;
    }


    sub(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return new this.constructor(this._x - other.x, this._y - other.y, this._z - other.z);
        } else throw errors.invalidArgument;
    }
    dot(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
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
    get toString() { return `${ this._type }(${ this._x }, ${ this._y }, ${ this._z }, ${ this._w })`; }

    equals(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return this._x === other.x && this._y === other.y && this._z === other.z && this._w === other.w;
        } else throw errors.invalidArgument;
    }
    mul(other) {
        switch(typeof(other)) {
            case 'number':
                return new this.constructor(this._x * other, this._y * other, this._z * other, this._w * other);
            case 'object':
                if (other.type === this._type) {
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
                if (other.type === this._type) {
                    if (other.x === 0 || other.y === 0) throw errors.pointwiseDivisionByZero;
                    return new this.constructor(this._x / other.x, this._y / other.y, this._z / other.z, this._w / other.w);
                } else throw errors.invalidArgument;
            default: throw errors.invalidArgument;
        }
    }
    add(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return new this.constructor(this._x + other.x, this._y + other.y, this._z + other.z, this._w + other.w);
        } else throw errors.invalidArgument;
    }


    sub(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return new this.constructor(this._x - other.x, this._y - other.y, this._z - other.z, this._w - other.w);
        } else throw errors.invalidArgument;
    }
    dot(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return this._x * other.x + this._y * other.y + this._z * other.z + this._w * other.w;
        }
    }

};

class Mat2 {
	constructor(arg1, arg2) {
		this._type = this.constructor.name;
		if (arg1 === undefined && arg2 === undefined) {
			this._col0 = new Vec2(1,0);
			this._col1 = new Vec2(0,1);
		} else if (typeof(arg1) === 'number') {
			this._col0 = new Vec2(arg1, arg1);
			this._col1 = new Vec2(arg1, arg1);
		} else if (typeof(arg1) === 'object' && typeof(arg2) === 'object' && arg1.type === 'Vec2' && arg2.type === 'Vec2') {
			this._col0 = arg1;
			this._col1 = arg2;
		} else {
			throw errors.invalidArgument;
		}
	}

    get type() { return this._type; }
    get col0() { return this._col0; }
    get col1() { return this._col1; }
    get isIdentity() {
    	return 	this._col0.x === 1 && this._col0.y === 0 &&
    			this._col1.x === 0 && this._col1.y === 1;
   	}
    get toString() { return `(${ this._col0.x }\t\t${ this._col1.x })\n(${ this._col0.y }\t\t${ this._col1.y })`; }
    get transposed() { return new this.constructor(new Vec2(this._col0.x, this._col1.x), new Vec2(this._col0.y, this._col1.y)); }
    get inverted() { return new this.constructor(); }		 // TODO!
    get determinant() { return this._col0.x * this._col1.y - this._col0.y * this._col1.x; }

    add(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return new this.constructor(this._col0.add(other.col0), this._col1.add(other.col1));
        } else throw errors.invalidArgument;
    }
    sub(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return new this.constructor(this._col0.sub(other.col0), this._col1.sub(other.col1));
        } else throw errors.invalidArgument;
    }
    mul(other) {
    	switch(typeof(other)) {
            case 'number':
                return new this.constructor(this._col0.mul(other), this._col1.mul(other));
            case 'object':
            	if (other.type === this._col0.type) {
            		let t = this.transposed;
            		return new this._col0.constructor(t.col0.dot(other), t.col1.dot(other));
            	}
                if (other.type === this._type) {
                	return new this.constructor(this.mul(other.col0), this.mul(other.col1));
                } else throw errors.invalidArgument;
            default: throw errors.invalidArgument;
        }
    }
    div(other) {
    	switch(typeof(other)) {
            case 'number':
            	if (other === 0) throw errors.scalarDivisionByZero;
                return new this.constructor(this._col0.div(other), this._col1.div(other));
            default: throw errors.invalidArgument;
        }
    }

};