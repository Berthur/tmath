
var TMATH = {
	errors: {
		invalidArgument: 'Invalid function argument.',
		scalarDivisionByZero: 'Scalar division by zero not allowed.',
		pointwiseDivisionByZero: 'Pointwise division by zero not allowed.',
	}
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
    get normalized() { return this.div(this.length); }
    get isZero() { return this._x === 0 && this._y === 0; }
    get toString() { return `${ this._type }(${ this._x }, ${ this._y })`; }

    equals(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return this._x === other.x && this._y === other.y;
        } else throw TMATH.errors.invalidArgument;
	}
    mul(other) {
        switch(typeof(other)) {
            case 'number':
                return new this.constructor(this._x * other, this._y * other);
            case 'object':
                if (other.type === this._type) {
                    return new this.constructor(this._x * other.x, this._y * other.y);
                } else throw TMATH.errors.invalidArgument;
            default: throw TMATH.errors.invalidArgument;
        }
    }
    div(other) {
        switch(typeof(other)) {
            case 'number':
                //if (other === 0) throw TMATH.errors.scalarDivisionByZero;
                return new this.constructor(this._x / other, this._y / other);
            case 'object':
                if (other.type === this._type) {
                    //if (other.x === 0 || other.y === 0) throw TMATH.errors.pointwiseDivisionByZero;
                    return new this.constructor(this._x / other.x, this._y / other.y);
                } else throw TMATH.errors.invalidArgument;
            default: throw TMATH.errors.invalidArgument;
        }
    }
    add(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return new this.constructor(this._x + other.x, this._y + other.y);
        } else throw TMATH.errors.invalidArgument;
    }


    sub(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return new this.constructor(this._x - other.x, this._y - other.y);
        } else throw TMATH.errors.invalidArgument;
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
    get normalized() { return this.div(this.length); }
    get isZero() { return this._x === 0 && this._y === 0 && this._z === 0; }
    get toString() { return `${ this._type }(${ this._x }, ${ this._y }, ${ this._z })`; }

    equals(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return this._x === other.x && this._y === other.y && this._z === other.z;
        } else throw TMATH.errors.invalidArgument;
    }
    mul(other) {
        switch(typeof(other)) {
            case 'number':
                return new this.constructor(this._x * other, this._y * other, this._z * other);
            case 'object':
                if (other.type === this._type) {
                    return new this.constructor(this._x * other.x, this._y * other.y, this._z * other.z);
                } else throw TMATH.errors.invalidArgument;
            default: throw TMATH.errors.invalidArgument;
        }
    }
    div(other) {
        switch(typeof(other)) {
            case 'number':
                //if (other === 0) throw TMATH.errors.scalarDivisionByZero;
                return new this.constructor(this._x / other, this._y / other, this._z / other);
            case 'object':
                if (other.type === this._type) {
                    //if (other.x === 0 || other.y === 0 || other.z === 0) throw TMATH.errors.pointwiseDivisionByZero;
                    return new this.constructor(this._x / other.x, this._y / other.y, this._z / other.z);
                } else throw TMATH.errors.invalidArgument;
            default: throw TMATH.errors.invalidArgument;
        }
    }
    add(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return new this.constructor(this._x + other.x, this._y + other.y, this._z + other.z);
        } else throw TMATH.errors.invalidArgument;
    }


    sub(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return new this.constructor(this._x - other.x, this._y - other.y, this._z - other.z);
        } else throw TMATH.errors.invalidArgument;
    }
    dot(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return this._x * other.x + this._y * other.y + this._z * other.z;
        }
    }
    cross(other) {
    	let x = this._y * other.z - this._z * other.y;
    	let y = this._z * other.x - this._x * other.z;
    	let z = this._x * other.y - this._y * other.x;
    	return new Vec3(x, y, z);
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
    get xyz() { return new Vec3(this._x, this._y, this._z) }
    get length() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w); }
    get lengthSqr() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w; }
    get neg() { return new this.constructor(-this._x, -this._y, -this._z, -this._w); }
    get normalized() { return this.div(this.length); }
    get isZero() { return this._x === 0 && this._y === 0 && this._z === 0 && this._w === 0; }
    get toString() { return `${ this._type }(${ this._x }, ${ this._y }, ${ this._z }, ${ this._w })`; }

    equals(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return this._x === other.x && this._y === other.y && this._z === other.z && this._w === other.w;
        } else throw TMATH.errors.invalidArgument;
    }
    mul(other) {
        switch(typeof(other)) {
            case 'number':
                return new this.constructor(this._x * other, this._y * other, this._z * other, this._w * other);
            case 'object':
                if (other.type === this._type) {
                    return new this.constructor(this._x * other.x, this._y * other.y, this._z * other.z, this._w * other.w);
                } else throw TMATH.errors.invalidArgument;
            default: throw TMATH.errors.invalidArgument;
        }
    }
    div(other) {
        switch(typeof(other)) {
            case 'number':
                //if (other === 0) throw TMATH.errors.scalarDivisionByZero;
                return new this.constructor(this._x / other, this._y / other, this._z / other, this._w / other);
            case 'object':
                if (other.type === this._type) {
                    //if (other.x === 0 || other.y === 0 || other.z === 0 || other.w === 0) throw TMATH.errors.pointwiseDivisionByZero;
                    return new this.constructor(this._x / other.x, this._y / other.y, this._z / other.z, this._w / other.w);
                } else throw TMATH.errors.invalidArgument;
            default: throw TMATH.errors.invalidArgument;
        }
    }
    add(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return new this.constructor(this._x + other.x, this._y + other.y, this._z + other.z, this._w + other.w);
        } else throw TMATH.errors.invalidArgument;
    }


    sub(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return new this.constructor(this._x - other.x, this._y - other.y, this._z - other.z, this._w - other.w);
        } else throw TMATH.errors.invalidArgument;
    }
    dot(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return this._x * other.x + this._y * other.y + this._z * other.z + this._w * other.w;
        }
    }

};

class Mat2 {
	constructor() {
		this._type = this.constructor.name;
		if (arguments.length === 0) {
			this._col0 = new Vec2(1,0);
			this._col1 = new Vec2(0,1);
		} else if (typeof(arguments[0]) === 'number') {
			if (arguments.length === 4 && Array.prototype.every(function(arg) { return typeof(arg) === 'number'; })) {
				this._col0 = new Vec2(arguments[0], arguments[1]);
				this._col1 = new Vec2(arguments[2], arguments[3]);
			} else if (arguments.length === 1) {
				this._col0 = new Vec2(arguments[0], arguments[0]);
				this._col1 = new Vec2(arguments[0], arguments[0]);
			} else {
				throw TMATH.errors.invalidArgument;
			}
		} else if (typeof(arguments[0]) === 'object' && typeof(arguments[1]) === 'object' && arguments[0].type === 'Vec2' && arguments[1].type === 'Vec2') {
			this._col0 = arguments[0];
			this._col1 = arguments[1];
		} else {
			throw TMATH.errors.invalidArgument;
		}
	}

    get type() { return this._type; }
    get col0() { return this._col0; }
    get col1() { return this._col1; }
    get row0() { return new Vec2(this._col0.x, this._col1.x); }
    get row1() { return new Vec2(this._col0.y, this._col1.y); }
   	get neg() { return new this.constructor(this.col0.neg, this.col1.neg); }
    get isIdentity() {
    	return 	this._col0.x === 1 && this._col0.y === 0 &&
    			this._col1.x === 0 && this._col1.y === 1;
   	}
    get toString() { return `(${ this._col0.x }\t\t${ this._col1.x })\n(${ this._col0.y }\t\t${ this._col1.y })`; }
    get transpose() { return new this.constructor(new Vec2(this._col0.x, this._col1.x), new Vec2(this._col0.y, this._col1.y)); }
    get inverse() {
    	return new Mat2(this._col1.y, -this._col0.y, -this._col1.x, this._col0.x).div(this.determinant);
    }
    get determinant() { return this._col0.x * this._col1.y - this._col0.y * this._col1.x; }

    equals(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return this.col0.equals(other.col0) && this.col1.equals(other.col1);
        } else throw TMATH.errors.invalidArgument;
    }
    add(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return new this.constructor(this._col0.add(other.col0), this._col1.add(other.col1));
        } else throw TMATH.errors.invalidArgument;
    }
    sub(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return new this.constructor(this._col0.sub(other.col0), this._col1.sub(other.col1));
        } else throw TMATH.errors.invalidArgument;
    }
    mul(other) {
    	switch(typeof(other)) {
            case 'number':
                return new this.constructor(this._col0.mul(other), this._col1.mul(other));
            case 'object':
            	if (other.type === this._col0.type) {
            		let t = this.transpose;
            		return new this._col0.constructor(t.col0.dot(other), t.col1.dot(other));
            	}
                if (other.type === this._type) {
                	return new this.constructor(this.mul(other.col0), this.mul(other.col1));
                } else throw TMATH.errors.invalidArgument;
            default: throw TMATH.errors.invalidArgument;
        }
    }
    div(other) {
    	switch(typeof(other)) {
            case 'number':
            	//if (other === 0) throw TMATH.errors.scalarDivisionByZero;
                return new this.constructor(this._col0.div(other), this._col1.div(other));
            default: throw TMATH.errors.invalidArgument;
        }
    }

};

class Mat3 {
	constructor() {
		this._type = this.constructor.name;
		if (arguments.length === 0) {
			this._col0 = new Vec3(1,0,0);
			this._col1 = new Vec3(0,1,0);
			this._col2 = new Vec3(0,0,1);
		} else if (typeof(arguments[0]) === 'number') {
			if (arguments.length === 9 && Array.prototype.every(function(arg) { return typeof(arg) === 'number'; })) {
				this._col0 = new Vec3(arguments[0], arguments[1], arguments[2]);
				this._col1 = new Vec3(arguments[3], arguments[4], arguments[5]);
				this._col2 = new Vec3(arguments[6], arguments[7], arguments[8]);
			} else if (arguments.length === 1) {
				this._col0 = new Vec3(arguments[0], arguments[0], arguments[0]);
				this._col1 = new Vec3(arguments[0], arguments[0], arguments[0]);
				this._col2 = new Vec3(arguments[0], arguments[0], arguments[0]);
			} else {
				throw TMATH.errors.invalidArgument;
			}
		} else if (	typeof(arguments[0]) === 'object' && typeof(arguments[1]) === 'object' && typeof(arguments[2]) === 'object' &&
					arguments[0].type === 'Vec3' && arguments[1].type === 'Vec3' && arguments[2].type === 'Vec3') {
			this._col0 = arguments[0];
			this._col1 = arguments[1];
			this._col2 = arguments[2];
		} else {
			throw TMATH.errors.invalidArgument;
		}
	}

    get type() { return this._type; }
    get col0() { return this._col0; }
    get col1() { return this._col1; }
    get col2() { return this._col2; }
    get row0() { return new Vec3(this._col0.x, this._col1.x, this._col2.x); }
    get row1() { return new Vec3(this._col0.y, this._col1.y, this._col2.y); }
    get row2() { return new Vec3(this._col0.z, this._col1.z, this._col2.z); }
   	get neg() { return new this.constructor(this.col0.neg, this.col1.neg, this._col2.neg); }
    get isIdentity() {
    	return 	this._col0.x === 1 && this._col0.y === 0 && this._col0.z === 0 &&
    			this._col1.x === 0 && this._col1.y === 1 && this._col1.z === 0 &&
    			this._col2.x === 0 && this._col2.y === 0 && this._col2.z === 1;
   	}
    get toString() { return `(${ this._col0.x }\t\t${ this._col1.x }\t\t${ this._col2.x })\n(${ this._col0.y }\t\t${ this._col1.y }\t\t${ this._col2.y})\n(${ this._col0.z }\t\t${ this._col1.z }\t\t${ this._col2.z})`; }
    get transpose() {
    	return new this.constructor(this._col0.x, this._col1.x, this._col2.x,
    								this._col0.y, this._col1.y, this._col2.y,
    								this._col0.z, this._col1.z, this._col2.z);
    }
    get inverse() {
    	function det2(a,b,c,d) { return a*d - b*c; }
    	return new Mat3(
	    	det2(	this._col1.y,	this._col2.y,	this._col1.z,	this._col2.z	),
	    	-det2(	this._col1.x,	this._col2.x,	this._col1.z,	this._col2.z	),
	    	det2(	this._col1.x,	this._col2.x,	this._col1.y,	this._col2.y	),
	    	-det2(	this._col0.y,	this._col2.y,	this._col0.z,	this._col2.z	),
	    	det2(	this._col0.x,	this._col2.x,	this._col0.z,	this._col2.z	),
	    	-det2(	this._col0.x,	this._col2.x,	this._col0.y,	this._col2.y	),
	    	det2(	this._col0.y,	this._col1.y,	this._col0.z,	this._col1.z	),
	    	-det2(	this._col0.x,	this._col1.x,	this._col0.z,	this._col1.z	),
	    	det2(	this._col0.x,	this._col1.x,	this._col0.y,	this._col1.y	),
    	).transpose.div(this.determinant);
    }
    get determinant() {
    	return 		this._col0.x * this._col1.y * this._col2.z
				+	this._col1.x * this._col2.y * this._col0.z
				+	this._col2.x * this._col0.y * this._col1.z
				-	this._col2.x * this._col1.y * this._col0.z
				-	this._col1.x * this._col0.y * this._col2.z
				-	this._col0.x * this._col2.y * this._col1.z;
    }

    equals(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return this.col0.equals(other.col0) && this.col1.equals(other.col1) && this._col2.equals(other.col2);
        } else throw TMATH.errors.invalidArgument;
    }
    add(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return new this.constructor(this._col0.add(other.col0), this._col1.add(other.col1), this._col2.add(other.col2));
        } else throw TMATH.errors.invalidArgument;
    }
    sub(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return new this.constructor(this._col0.sub(other.col0), this._col1.sub(other.col1), this._col2.sub(other.col2));
        } else throw TMATH.errors.invalidArgument;
    }
    mul(other) {
    	switch(typeof(other)) {
            case 'number':
                return new this.constructor(this._col0.mul(other), this._col1.mul(other), this._col2.mul(other));
            case 'object':
            	if (other.type === this._col0.type) {
            		let t = this.transpose;
            		return new this._col0.constructor(t.col0.dot(other), t.col1.dot(other), t.col2.dot(other));
            	}
                if (other.type === this._type) {
                	return new this.constructor(this.mul(other.col0), this.mul(other.col1), this.mul(other.col2));
                } else throw TMATH.errors.invalidArgument;
            default: throw TMATH.errors.invalidArgument;
        }
    }
    div(other) {
    	switch(typeof(other)) {
            case 'number':
            	//if (other === 0) throw TMATH.errors.scalarDivisionByZero;
                return new this.constructor(this._col0.div(other), this._col1.div(other), this._col2.div(other));
            default: throw TMATH.errors.invalidArgument;
        }
    }

};

class Mat4 {
	constructor() {
		this._type = this.constructor.name;
		if (arguments.length === 0) {
			this._col0 = new Vec4(1,0,0,0);
			this._col1 = new Vec4(0,1,0,0);
			this._col2 = new Vec4(0,0,1,0);
			this._col3 = new Vec4(0,0,0,1);
		} else if (typeof(arguments[0]) === 'number') {
			if (arguments.length === 16 && Array.prototype.every(function(arg) { return typeof(arg) === 'number'; })) {
				this._col0 = new Vec4(arguments[0], arguments[1], arguments[2], arguments[3]);
				this._col1 = new Vec4(arguments[4], arguments[5], arguments[6], arguments[7]);
				this._col2 = new Vec4(arguments[8], arguments[9], arguments[10], arguments[11]);
				this._col3 = new Vec4(arguments[12], arguments[13], arguments[14], arguments[15]);
			} else if (arguments.length === 1) {
				this._col0 = new Vec4(arguments[0], arguments[0], arguments[0], arguments[0]);
				this._col1 = new Vec4(arguments[0], arguments[0], arguments[0], arguments[0]);
				this._col2 = new Vec4(arguments[0], arguments[0], arguments[0], arguments[0]);
				this._col3 = new Vec4(arguments[0], arguments[0], arguments[0], arguments[0]);
			} else {
				throw TMATH.errors.invalidArgument;
			}
		} else if (	typeof(arguments[0]) === 'object' && typeof(arguments[1]) === 'object' && typeof(arguments[2]) === 'object' && typeof(arguments[3] === 'object') &&
					arguments[0].type === 'Vec4' && arguments[1].type === 'Vec4' && arguments[2].type === 'Vec4' && arguments[3].type === 'Vec4') {
			this._col0 = arguments[0];
			this._col1 = arguments[1];
			this._col2 = arguments[2];
			this._col3 = arguments[3];
		} else {
			throw TMATH.errors.invalidArgument;
		}
	}

    get type() { return this._type; }
    get col0() { return this._col0; }
    get col1() { return this._col1; }
    get col2() { return this._col2; }
    get col3() { return this._col3; }
    get row0() { return new Vec4(this._col0.x, this._col1.x, this._col2.x, this._col3.x); }
    get row1() { return new Vec4(this._col0.y, this._col1.y, this._col2.y, this._col3.y); }
    get row2() { return new Vec4(this._col0.z, this._col1.z, this._col2.z, this._col3.z); }
    get row3() { return new Vec4(this._col0.w, this._col1.w, this._col2.w, this._col3.w); }
    get toMat3() { return new Mat3(this._col0.xyz, this._col1.xyz, this._col2.xyz); }
   	get neg() { return new this.constructor(this.col0.neg, this.col1.neg, this._col2.neg, this._col3.neg); }
    get isIdentity() {
    	return 	this._col0.x === 1 && this._col0.y === 0 && this._col0.z === 0 && this._col0.w === 0 &&
    			this._col1.x === 0 && this._col1.y === 1 && this._col1.z === 0 && this._col1.w === 0 &&
    			this._col2.x === 0 && this._col2.y === 0 && this._col2.z === 1 && this._col2.w === 0 &&
    			this._col3.x === 0 && this._col3.y === 0 && this._col3.z === 0 && this._col3.w === 1;
   	}
    get toString() { return `(${ this._col0.x }\t\t${ this._col1.x }\t\t${ this._col2.x }\t\t${ this._col3.x })\n(${ this._col0.y }\t\t${ this._col1.y }\t\t${ this._col2.y }\t\t${ this._col3.y })\n(${ this._col0.z }\t\t${ this._col1.z }\t\t${ this._col2.z }\t\t${ this._col3.z })\n(${ this._col0.w }\t\t${ this._col1.w }\t\t${ this._col2.w }\t\t${ this._col3.w })`; }
    get transpose() {
    	return new this.constructor(this._col0.x,this._col1.x,this._col2.x,this._col3.x,
    								this._col0.y,this._col1.y,this._col2.y,this._col3.y,
    								this._col0.z,this._col1.z,this._col2.z,this._col3.z,
    								this._col0.w,this._col1.w,this._col2.w,this._col3.w);
    }
    get inverse() {
    	function det2(a,b,c, d,e,f, g,h,i) { return new Mat3(a,d,g, b,e,h, c,f,i).determinant; }
    	return new Mat4(
	    	det2(	this._col1.y, this._col2.y, this._col3.y,	this._col1.z, this._col2.z, this._col3.z,	this._col1.w, this._col2.w, this._col3.w ),
	    	-det2(	this._col1.x, this._col2.x, this._col3.x,	this._col1.z, this._col2.z, this._col3.z,	this._col1.w, this._col2.w, this._col3.w ),
	    	det2(	this._col1.x, this._col2.x, this._col3.x,	this._col1.y, this._col2.y, this._col3.y,	this._col1.w, this._col2.w, this._col3.w ),
	    	-det2(	this._col1.x, this._col2.x, this._col3.x,	this._col1.y, this._col2.y, this._col3.y,	this._col1.z, this._col2.z, this._col3.z ),
	    	-det2(	this._col0.y, this._col2.y, this._col3.y,	this._col0.z, this._col2.z, this._col3.z,	this._col0.w, this._col2.w, this._col3.w ),
	    	det2(	this._col0.x, this._col2.x, this._col3.x,	this._col0.z, this._col2.z, this._col3.z,	this._col0.w, this._col2.w, this._col3.w ),
	    	-det2(	this._col0.x, this._col2.x, this._col3.x,	this._col0.y, this._col2.y, this._col3.y,	this._col0.w, this._col2.w, this._col3.w ),
	    	det2(	this._col0.x, this._col2.x, this._col3.x,	this._col0.y, this._col2.y, this._col3.y,	this._col0.z, this._col2.z, this._col3.z ),
	    	det2(	this._col0.y, this._col1.y, this._col3.y,	this._col0.z, this._col1.z, this._col3.z,	this._col0.w, this._col1.w, this._col3.w ),
	    	-det2(	this._col0.x, this._col1.x, this._col3.x,	this._col0.z, this._col1.z, this._col3.z,	this._col0.w, this._col1.w, this._col3.w ),
	    	det2(	this._col0.x, this._col1.x, this._col3.x,	this._col0.y, this._col1.y, this._col3.y,	this._col0.w, this._col1.w, this._col3.w ),
	    	-det2(	this._col0.x, this._col1.x, this._col3.x,	this._col0.y, this._col1.y, this._col3.y,	this._col0.z, this._col1.z, this._col3.z ),
	    	-det2(	this._col0.y, this._col1.y, this._col2.y,	this._col0.z, this._col1.z, this._col2.z,	this._col0.w, this._col1.w, this._col2.w ),
	    	det2(	this._col0.x, this._col1.x, this._col2.x,	this._col0.z, this._col1.z, this._col2.z,	this._col0.w, this._col1.w, this._col2.w ),
	    	-det2(	this._col0.x, this._col1.x, this._col2.x,	this._col0.y, this._col1.y, this._col2.y,	this._col0.w, this._col1.w, this._col2.w ),
	    	det2(	this._col0.x, this._col1.x, this._col2.x,	this._col0.y, this._col1.y, this._col2.y,	this._col0.z, this._col1.z, this._col2.z ),
    	).transpose.div(this.determinant);
    }
    get determinant() {
    	let v0 = new Vec3(this._col0.y, this._col0.z, this._col0.w);
    	let v1 = new Vec3(this._col1.y, this._col1.z, this._col1.w);
    	let v2 = new Vec3(this._col2.y, this._col2.z, this._col2.w);
    	let v3 = new Vec3(this._col3.y, this._col3.z, this._col3.w);
    	return 		this._col0.x * new Mat3(v1,v2,v3).determinant
    			-	this._col1.x * new Mat3(v0,v2,v3).determinant
    			+	this._col2.x * new Mat3(v0,v1,v3).determinant
    			-	this._col3.x * new Mat3(v0,v1,v2).determinant;
    }

    equals(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return this.col0.equals(other.col0) && this.col1.equals(other.col1) && this._col2.equals(other.col2) && this._col3.equals(other.col3);
        } else throw TMATH.errors.invalidArgument;
    }
    add(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return new this.constructor(this._col0.add(other.col0), this._col1.add(other.col1), this._col2.add(other.col2), this._col3.add(other.col3));
        } else throw TMATH.errors.invalidArgument;
    }
    sub(other) {
        if (typeof(other) === 'object' && other.type === this._type) {
            return new this.constructor(this._col0.sub(other.col0), this._col1.sub(other.col1), this._col2.sub(other.col2), this._col3.sub(other.col3));
        } else throw TMATH.errors.invalidArgument;
    }
    mul(other) {
    	switch(typeof(other)) {
            case 'number':
                return new this.constructor(this._col0.mul(other), this._col1.mul(other), this._col2.mul(other), this._col3.mul(other));
            case 'object':
            	if (other.type === this._col0.type) {
            		let t = this.transpose;
            		return new this._col0.constructor(t.col0.dot(other), t.col1.dot(other), t.col2.dot(other), t.col3.dot(other));
            	}
                if (other.type === this._type) {
                	return new this.constructor(this.mul(other.col0), this.mul(other.col1), this.mul(other.col2), this.mul(other.col3));
                } else throw TMATH.errors.invalidArgument;
            default: throw TMATH.errors.invalidArgument;
        }
    }
    div(other) {
    	switch(typeof(other)) {
            case 'number':
            	//if (other === 0) throw TMATH.errors.scalarDivisionByZero;
                return new this.constructor(this._col0.div(other), this._col1.div(other), this._col2.div(other), this._col3.div(other));
            default: throw TMATH.errors.invalidArgument;
        }
    }

};
