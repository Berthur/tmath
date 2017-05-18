# tmath
A simple mathematics library for EcmaScript6, with focus on linear algebra.
This library weighs usability over performance, and as such should not be used for any performance-critical tasks.

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
