# tmath
A simple, convenient mathematics library for EcmaScript6, with focus on linear algebra. Contains implementations and functionality for vectors and matrices in 2, 3 and 4 dimensions, thus making it suitable for 2D and 3D geometry applications.
This library weighs usability and convenience over performance, and is therefore not intended for any performance-critical tasks.

The vector and matrix classes mimic basic datatypes. The public interface does not allow editing a vector or matrix once implemented, but rather, their methods will return a new vector or matrix instance. This allows chaining operations, as demonstrated in the example below.

If ES6 support is not guaranteed for your applications, consider taking a look at [Babel](https://babeljs.io/) or similar projects.

### Demonstration
A few examples on how to use *tmath*:

```javascript
let v = new Vec3(2,3,4);      // Creating a 3-dimensional column vector
let u = new Vec3(-1,2,7);
let w = v.add(u);
w.length
>> 12.12435565298214
```

```javascript
let m = new Mat3(v, u, w);    // Creating a 3x3 matrix with columns v, u and w
m = m.transpose.mul(-1)
m.determinant
>> 0
```

```javascript
let result_vector =  m.add(new Mat3(1,2,3, 4,5,6, 7,8,9))
                      .inverse
                      .div(3.14159)
                      .neg
                      .mul(u);
result_vector.z
>> 1.7507058527688208
```
