
var errors = 0;
var tests = 0;

function assert(condition, failureMsg) {
    ++tests;
    failureMsg = typeof failureMsg !== 'undefined' ? failureMsg : "(no failure message)";
    if (condition) {
        console.log("       ...Test passed");
    } else {
        ++errors;
        console.log("       >>>>> Test failed! Message: " + failureMsg);
    }
}

function assertEquals(obj1, obj2) {
    var res;
    if (typeof obj1.equals === 'function')
        res = obj1.equals(obj2);
    else res = obj1 === obj2;
    assert(res, `assertEquals(): "${obj1.toString} does not equal ${obj2.toString}."`);
}

function assertAlmostEquals(cand, ref, threshold) {
	Math.abs(ref - cand) <= threshold;
}

function assertDoesNotEqual(obj1, obj2) {
    var res;
    if (typeof obj1.equals === 'function')
        res = !obj1.equals(obj2);
    else res = obj1 !== obj2;
    assert(res, `assertEquals(): "${obj1.toString} equals ${obj2.toString}, even though it shouldn't."`);
}


function testVec2() {
    errors = tests = 0;
    console.log("___ Testing Vec2: ___");
    let t1 = new Vec2(0, 0);
    let t2 = new Vec2(3, 7);
    let t3 = new Vec2(-1, 8);
    let t4 = new Vec2(-4, 0);
    let t5 = new Vec2(34645747, -2343434);
    let t6 = new Vec2(3.173, -0.6632);
    let t7 = new Vec2(-3, 0);
    let t8 = new Vec2(0, 13);

    console.log("   Testing type:");
    assertEquals(   t1.type,                    "Vec2"                              );
    assertEquals(   t6.type,                    "Vec2"                              );
    console.log("   Testing toString:");
    assertEquals(   t1.toString,                "Vec2(0, 0)"                        );
    assertEquals(   t4.toString,                "Vec2(-4, 0)"                       );
    assertEquals(   t6.toString,                "Vec2(3.173, -0.6632)"              );
    console.log("   Testing component getters:");
    assertEquals(   t1.x,                       t1.y                                );
    assertEquals(   t4.y,                       0                                   );
    assertEquals(   t6.x,                       3.173                               );
    console.log("   Testing equality:");
    assertEquals(   t1,                         t1                                  );
    assertEquals(   t2,                         new Vec2(3, 7)                      );
    console.log("   Testing length:");
    assertEquals(   t1.length,                  0                                   );
    assertEquals(   t7.length,                  3                                   );
    assertEquals(   t6.length,                  Math.sqrt(t6.x * t6.x + t6.y * t6.y));
    console.log("   Testing square length:");
    assertEquals(   t1.lengthSqr,               0                                   );
    assertEquals(   t3.lengthSqr,               65                                  );
    assertEquals(   t6.lengthSqr,               10.50776324                         );
    console.log("   Testing negation:");
    assertEquals(   t1.neg,                     t1                                  );
    assertEquals(   t3.neg,                     new Vec2(1, -8)                     );
    assertEquals(   t6.neg,                     new Vec2(-3.173, 0.6632)            );
    console.log("   Testing isZero:");
    assertEquals(   t1.isZero,                  true                                );
    assertEquals(   t5.isZero,                  false                               );
    assertEquals(   t8.isZero,                  false                               );
    console.log("   Testing vector addition:");
    assertEquals(   t1.add(t2),                 t2                                  );
    assertEquals(   t2.add(t3),                 new Vec2(2, 15)                     );
    assertEquals(   t2.add(t5),                 t5.add(t2)                          );
    assertEquals(   t6.add(t3),                 new Vec2(2.173, 7.3368)             );
    console.log("   Testing vector subtraction:");
    assertEquals(   t5.sub(t1),                 t5                                  );
    assertEquals(   t4.sub(t2),                 new Vec2(-7, -7)                    );
    assertEquals(   t1.sub(t3),                 new Vec2(1, -8)                     );
    assertEquals(   t6.sub(t4),                 new Vec2(7.173, -0.6632)            );
    console.log("   Testing scalar multiplication:");
    assertEquals(   t1.mul(-123456789),         t1                                  );
    assertEquals(   t2.mul(3),                  new Vec2(9, 21)                     );
    assertEquals(   t5.mul(0),                  new Vec2(0, 0)                      );
    assertEquals(   t3.mul(-0.5),               new Vec2(0.5, -4)                   );
    assertEquals(   t6.mul(-10),                new Vec2(-31.73, 6.632)             );
    console.log("   Testing scalar division:");
    assertEquals(   t1.div(3),                  t1                                  );
    assertEquals(   t6.div(0.5),                t6.mul(2)                           );
    assertEquals(   t3.div(8.0),                new Vec2(-1/8, 1)                   );
    {
        let threw = false;
        let res;
        try {
            res = t2.div(0);
        } catch(err) {
            threw = true;
        }
        assert(threw, `div did not throw an error on ${t2.toString} / 0. Result: ${res}.`);
    }
    console.log("   Testing dot product:");
    assertEquals(   t3.dot(t1),                 0                                   );
    assertEquals(   t2.dot(t3),                 53                                  );
    assertEquals(   t8.dot(t7),                 0                                   );
    console.log("   Testing pointwise multiplication:");
    assertEquals(   t5.mul(t1),                 new Vec2(0, 0)                      );
    assertEquals(   t3.mul(t7),                 new Vec2(3, 0)                      );
    assertEquals(   t6.mul(t2),                 new Vec2(9.519, -4.6424));
    console.log("   Testing pointwise division:");
    assertEquals(   t2.div(t3),                 new Vec2(-3, 7/8)                   );
    assertEquals(   t1.div(t6),                 t1                                  );
    assertEquals(   t3.div(t5),                 new Vec2(-1/34645747, -8/2343434)   );
    {
        let threw = false;
        let res;
        try {
            res = t3.div(t7);
        } catch(err) {
            threw = true;
        }
        assert(threw, `pointwiseDiv did not throw an error on ${t3.toString} / ${t7.toString}. Result: ${res}.`);
    }

    if (errors === 0) {
        console.log(" >>> ALL " + tests + " TESTS PASSED.");
    } else {
        console.log(" >>> TESTS FINISHED WITH " + errors + " errors (out of " + tests + " tests).");
    }
    errors = tests = 0;
}

function testVec3() {
    errors = tests = 0;
    console.log("___ Testing Vec3: ___");
    let t1 = new Vec3(0, 0, 0);
    let t2 = new Vec3(3, 7, 2);
    let t3 = new Vec3(-1, 8, 2);
    let t4 = new Vec3(-4, 0, -3);
    let t5 = new Vec3(34645747, -2343434, -474731);
    let t6 = new Vec3(3.173, -0.6632, 1.11537);
    let t7 = new Vec3(-3, 0, 0);
    let t8 = new Vec3(0, 0, 10);

    console.log("   Testing type:");
    assertEquals(   t1.type,                    "Vec3"                              );
    assertEquals(   t6.type,                    "Vec3"                              );
    console.log("   Testing toString:");
    assertEquals(   t1.toString,                "Vec3(0, 0, 0)"                     );
    assertEquals(   t4.toString,                "Vec3(-4, 0, -3)"                   );
    assertEquals(   t6.toString,                "Vec3(3.173, -0.6632, 1.11537)"     );
    console.log("   Testing component getters:");
    assertEquals(   t1.z,                       t1.y                                );
    assertEquals(   t4.z,                       -3                                  );
    assertEquals(   t6.z,                       1.11537                             );
    console.log("   Testing equality:");
    assertEquals(   t1,                         t1                                  );
    assertEquals(   t2,                         new Vec3(3, 7, 2)                   );
    console.log("   Testing length:");
    assertEquals(   t1.length,                  0                                   );
    assertEquals(   t4.length,                  5                                   );
    assertEquals(   t6.length,                  Math.sqrt(t6.x * t6.x + t6.y * t6.y + t6.z * t6.z));
    console.log("   Testing square length:");
    assertEquals(   t1.lengthSqr,               0                                   );
    assertEquals(   t3.lengthSqr,               69                                  );
    assertEquals(   t8.lengthSqr,               100                                 );
    console.log("   Testing negation:");
    assertEquals(   t1.neg,                     t1                                  );
    assertEquals(   t3.neg,                     new Vec3(1, -8, -2)                 );
    assertEquals(   t6.neg,                     new Vec3(-3.173, 0.6632, -1.11537)  );
    console.log("   Testing isZero:");
    assertEquals(   t1.isZero,                  true                                );
    assertEquals(   t5.isZero,                  false                               );
    assertEquals(   t8.isZero,                  false                               );
    console.log("   Testing vector addition:");
    assertEquals(   t1.add(t5),                 t5                                  );
    assertEquals(   t2.add(t3),                 new Vec3(2, 15, 4)                  );
    assertEquals(   t6.add(t5),                 t5.add(t6)                          );
    assertEquals(   t6.add(t3),                 new Vec3(2.173, 7.3368, 3.11537)    );
    console.log("   Testing vector subtraction:");
    assertEquals(   t6.sub(t1),                 t6                                  );
    assertEquals(   t4.sub(t2),                 new Vec3(-7, -7, -5)                );
    assertEquals(   t1.sub(t3),                 new Vec3(1, -8, -2)                 );
    assertEquals(   t1.sub(t6),                 t6.neg                              );
    console.log("   Testing scalar multiplication:");
    assertEquals(   t1.mul(-123456.789),         t1                                 );
    assertEquals(   t2.mul(3),                  new Vec3(9, 21, 6)                  );
    assertEquals(   t5.mul(0),                  new Vec3(0, 0, 0)                   );
    assertEquals(   t3.mul(-0.5),               new Vec3(0.5, -4, -1)               );
    assertEquals(   t6.mul(-10),                new Vec3(-31.73, 6.632, -11.1537)   );
    console.log("   Testing scalar division:");
    assertEquals(   t1.div(-33.8496),           t1                                  );
    assertEquals(   t6.div(0.5),                t6.mul(2)                           );
    assertEquals(   t3.div(8.0),                new Vec3(-1/8, 1, 2/8)              );
    {
        let threw = false;
        let res;
        try {
            res = t2.div(0);
        } catch(err) {
            threw = true;
        }
        assert(threw, `div did not throw an error on ${t2.toString} / 0. Result: ${res}.`);
    }
    console.log("   Testing dot product:");
    assertEquals(   t3.dot(t1),                 0                                   );
    assertEquals(   t2.dot(t3),                 57                                  );
    assertEquals(   t8.dot(t7),                 0                                   );
    console.log("   Testing cross product:");
    assertEquals(   t3.cross(t1),              	t1                     				);
    assertEquals(   t5.cross(t5),              	t1                     				);
    assertEquals(   t2.cross(t3),           	new Vec3(-2,-8,31)                  );
    assertEquals(   t4.cross(t7),              	new Vec3(0,9,0)	                    );
    assertEquals(	t5.cross(t6),				t6.cross(t5).neg 					);
    console.log("   Testing pointwise multiplication:");
    assertEquals(   t5.mul(t1),                 new Vec3(0, 0, 0)                   );
    assertEquals(   t3.mul(t4),                 new Vec3(4, 0, -6)                  );
    assertEquals(   t6.mul(t2),                 new Vec3(9.519, -4.6424, 2.23074)   );
    console.log("   Testing pointwise division:");
    assertEquals(   t2.div(t3),                 new Vec3(-3, 7/8, 1)                );
    assertEquals(   t1.div(t6),                 t1                                  );
    assertEquals(   t3.div(t5),                 new Vec3(-1/34645747, -8/2343434, -2/474731));
    {
        let threw = false;
        let res;
        try {
            res = t3.div(t7);
        } catch(err) {
            threw = true;
        }
        assert(threw, `pointwiseDiv did not throw an error on ${t3.toString} / ${t7.toString}. Result: ${res}.`);
    }

    if (errors === 0) {
        console.log(" >>> ALL " + tests + " TESTS PASSED.");
    } else {
        console.log(" >>> TESTS FINISHED WITH " + errors + " errors (out of " + tests + " tests).");
    }
    errors = tests = 0;
}

function testVec4() {
    errors = tests = 0;
    console.log("___ Testing Vec4: ___");
    let t1 = new Vec4(0, 0, 0, 0);
    let t2 = new Vec4(3, 7, 2, 3);
    let t3 = new Vec4(-1, 8, 2, -3);
    let t4 = new Vec4(-4, 0, -3, 1);
    let t5 = new Vec4(34645747, -2343434, -474731, 136347);
    let t6 = new Vec4(3.173, -0.6632, 1.11537, 0.00145);
    let t7 = new Vec4(-3, 0, 1, 0);
    let t8 = new Vec4(0, 0, 0, 3);

    console.log("   Testing type:");
    assertEquals(   t1.type,                    "Vec4"                              );
    assertEquals(   t6.type,                    "Vec4"                              );
    console.log("   Testing toString:");
    assertEquals(   t1.toString,                "Vec4(0, 0, 0, 0)"                  );
    assertEquals(   t4.toString,                "Vec4(-4, 0, -3, 1)"                );
    assertEquals(   t6.toString,                "Vec4(3.173, -0.6632, 1.11537, 0.00145)");
    console.log("   Testing component getters:");
    assertEquals(   t1.w,                       t1.y                                );
    assertEquals(   t4.w,                       1                                  );
    assertEquals(   t6.w,                       0.00145                             );
    console.log("   Testing equality:");
    assertEquals(   t1,                         t1                                  );
    assertEquals(   t2,                         new Vec4(3, 7, 2, 3)                );
    console.log("   Testing length:");
    assertEquals(   t1.length,                  0                                   );
    assertEquals(   t8.length,                  3                                   );
    assertEquals(   t6.length,                  Math.sqrt(t6.x * t6.x + t6.y * t6.y + t6.z * t6.z + t6.w * t6.w));
    console.log("   Testing square length:");
    assertEquals(   t1.lengthSqr,               0                                   );
    assertEquals(   t3.lengthSqr,               78                                  );
    assertEquals(   t8.lengthSqr,               9                                   );
    console.log("   Testing negation:");
    assertEquals(   t1.neg,                     t1                                  );
    assertEquals(   t3.neg,                     new Vec4(1, -8, -2, 3)              );
    assertEquals(   t6.neg,                     new Vec4(-3.173, 0.6632, -1.11537, -0.00145));
    console.log("   Testing isZero:");
    assertEquals(   t1.isZero,                  true                                );
    assertEquals(   t5.isZero,                  false                               );
    assertEquals(   t8.isZero,                  false                               );
    console.log("   Testing vector addition:");
    assertEquals(   t1.add(t5),                 t5                                  );
    assertEquals(   t2.add(t3),                 new Vec4(2, 15, 4, 0)               );
    assertEquals(   t6.add(t5),                 t5.add(t6)                          );
    assertEquals(   t6.add(t3),                 new Vec4(2.173, 7.3368, 3.11537, -2.99855));
    console.log("   Testing vector subtraction:");
    assertEquals(   t6.sub(t1),                 t6                                  );
    assertEquals(   t4.sub(t2),                 new Vec4(-7, -7, -5, -2)            );
    assertEquals(   t1.sub(t3),                 new Vec4(1, -8, -2, 3)             );
    assertEquals(   t1.sub(t6),                 t6.neg                              );
    console.log("   Testing scalar multiplication:");
    assertEquals(   t1.mul(-123456.789),         t1                                 );
    assertEquals(   t2.mul(3),                  new Vec4(9, 21, 6, 9)               );
    assertEquals(   t5.mul(0),                  new Vec4(0, 0, 0, 0)                );
    assertEquals(   t3.mul(-0.5),               new Vec4(0.5, -4, -1, 1.5)          );
    console.log("   Testing scalar division:");
    assertEquals(   t1.div(-33.8496),           t1                                  );
    assertEquals(   t6.div(0.5),                t6.mul(2)                           );
    assertEquals(   t3.div(8.0),                new Vec4(-1/8, 1, 2/8, -3/8)        );
    {
        let threw = false;
        let res;
        try {
            res = t2.div(0);
        } catch(err) {
            threw = true;
        }
        assert(threw, `div did not throw an error on ${t2.toString} / 0. Result: ${res}.`);
    }
    console.log("   Testing dot product:");
    assertEquals(   t3.dot(t1),                 0                                   );
    assertEquals(   t2.dot(t3),                 48                                  );
    assertEquals(   t8.dot(t7),                 0                                   );
    console.log("   Testing pointwise multiplication:");
    assertEquals(   t5.mul(t1),                 new Vec4(0, 0, 0, 0)                   );
    assertEquals(   t3.mul(t4),                 new Vec4(4, 0, -6, -3)                  );
    assertEquals(   t6.mul(t2),                 new Vec4(9.519, -4.6424, 2.23074, 0.00435)   );
    console.log("   Testing pointwise division:");
    assertEquals(   t2.div(t3),                 new Vec4(-3, 7/8, 1, -1)                );
    assertEquals(   t1.div(t6),                 t1                                  );
    assertEquals(   t3.div(t5),                 new Vec4(-1/34645747, -8/2343434, -2/474731, -3/136347));
    {
        let threw = false;
        let res;
        try {
            res = t3.div(t7);
        } catch(err) {
            threw = true;
        }
        assert(threw, `pointwiseDiv did not throw an error on ${t3.toString} / ${t7.toString}. Result: ${res}.`);
    }

    if (errors === 0) {
        console.log(" >>> ALL " + tests + " TESTS PASSED.");
    } else {
        console.log(" >>> TESTS FINISHED WITH " + errors + " errors (out of " + tests + " tests).");
    }
    errors = tests = 0;
}

function testMat2() {
    errors = tests = 0;
    console.log("___ Testing Mat2: ___");

    let t1 = new Vec2(0, 0);
    let t2 = new Vec2(3, 7);
    let t3 = new Vec2(-1, 8);
    let t4 = new Vec2(-4, 0);
    let t5 = new Vec2(34645747, -2343434);
    let t6 = new Vec2(3.173, -0.6632);
    let t7 = new Vec2(-3, 0);
    let t8 = new Vec2(0, 13);

    let m1 = new Mat2();
    let m2 = new Mat2(t1, t1);
    let m3 = new Mat2(t2, t3);
    let m4 = new Mat2(-3, 0, 0, 13);
    let m5 = new Mat2(t5, t6);

    console.log("   Testing type:");
    assertEquals(   m2.type,                    "Mat2"                                                          );
    assertEquals(   m5.type,                    "Mat2"                                                          );
    console.log("   Testing toString:");
    assertEquals(   m2.toString,                "(0\t\t0)\n(0\t\t0)"                                            );
    assertEquals(   m3.toString,                `(${ t2.x }\t\t${ t3.x })\n(${ t2.y }\t\t${ t3.y })`            );
    console.log("   Testing component getters:");
    assertEquals(   m2.col0,                    t1                                                              );
    assertEquals(   m3.col1,                    t3                                                              );
    assertEquals(   m2.row0,                    t1                                                              );
    assertEquals(   m3.row1,                   	new Vec2(t2.y, t3.y)	                                        );
    console.log("   Testing equality:");
    assertEquals(   m5,                         m5                                                              );
    assertEquals(   m1,                         new Mat2()                                                      );
    console.log("   Testing negation:");
    assertEquals(   m2.neg,                     m2                                                              );
    assertEquals(   m5.neg,                     new Mat2(t5.neg, t6.neg)                                        );
    assertEquals(   m4.neg,                     new Mat2(new Vec2(3,0), new Vec2(0,-13))                        );
    console.log("   Testing isIdentity:");
    assertEquals(   m1.isIdentity,              true                                                            );
    assertEquals(   m2.isIdentity,              false                                                           );
    assertEquals(   m5.isIdentity,              false                                                           );
    console.log("   Testing transposed:");
    assertEquals(   m1.transposed,              m1                                                              );
    assertEquals(   m2.transposed,              m2                                                              );
    assertEquals(   m5.transposed,              new Mat2(new Vec2(t5.x, t6.x), new Vec2(t5.y, t6.y))            );
    console.log("   Testing determinant:");
    assertEquals(   m1.determinant,             1                                                               );
    assertEquals(   m2.determinant,             0                                                               );
    assertEquals(   m3.determinant,             3*8 - (-1)*7                                                    );
    console.log("   Testing inverted:");
    assertEquals(   m1.inverted,                m1.neg                                                          );  // TODO!
    assertEquals(   m2.inverted,                m1.neg                                                          );  // TODO!
    assertEquals(   m3.inverted,                m1.neg                                                          );  // TODO!
    console.log("   Testing addition:");
    assertEquals(   m1.add(m1),                 new Mat2(new Vec2(2,0), new Vec2(0,2))                          );
    assertEquals(   m2.add(m5),                 m5                                                              );
    assertEquals(   m3.add(m4),                 new Mat2(t2.add(t7), t8.add(t3))                                );
    assertEquals(   m4.add(m5),                 m5.add(m4)                                                      );
    console.log("   Testing subtraction:");
    assertEquals(   m1.sub(m1),                 m2                                                              );
    assertEquals(   m5.sub(m5),                 m2                                                              );
    assertEquals(   m3.sub(m4),                 new Mat2(t2.sub(t7), t3.sub(t8))                                );
    assertEquals(   m4.sub(m5),                 m4.add(m5.neg)                                                  );
    console.log("   Testing scalar multiplication:");
    assertEquals(   m5.mul(0),                  m2                                                              );
    assertEquals(   m1.mul(-3),                 new Mat2(new Vec2(-3,0), new Vec2(0,-3))                        );
    assertEquals(   m2.mul(-1235.6790),         m2                                                              );
    assertEquals(   m3.mul(4),                  new Mat2(m3.col0.mul(4), m3.col1.mul(4))                        );
    console.log("   Testing scalar division:");
    assertEquals(   m5.div(-3.3),               new Mat2(m5.col0.div(-3.3), m5.col1.div(-3.3))                  );
    assertEquals(   m1.div(4),                  new Mat2(new Vec2(1/4,0), new Vec2(0,1/4))                      );
    assertEquals(   m2.div(-1235.6790),         m2                                                              );
    assertEquals(   m3.div(4),                  new Mat2(m3.col0.div(4), m3.col1.div(4))                        );
    {
        let threw = false;
        let res;
        try {
            res = m5.div(0);
        } catch(err) {
            threw = true;
        }
        assert(threw, `div did not throw an error on ${m2.toString} / 0. Result: ${res}.`);
    }
   	console.log("   Testing matrix-vector multiplication:");
    assertEquals(   m1.mul(t5),                 t5                                                              );
    assertEquals(   m5.mul(t1),                 t1                                                              );
    assertEquals(   m3.mul(t2),                 new Vec2(2,77)								              		);
    assertEquals(   m2.mul(t5),                 t1											                    );
    console.log("   Testing matrix multiplication:");
    assertEquals(   m1.mul(m5),                 m5                                                              );
    assertEquals(   m5.mul(m1),                 m5                                                              );
    assertEquals(   m3.mul(m4),                 new Mat2(new Vec2(-9,-21), new Vec2(-13,104))                   );
    assertEquals(   m4.mul(m3),                 new Mat2(new Vec2(-9,91), new Vec2(3,104))                      );

    if (errors === 0) {
        console.log(" >>> ALL " + tests + " TESTS PASSED.");
    } else {
        console.log(" >>> TESTS FINISHED WITH " + errors + " errors (out of " + tests + " tests).");
    }
    errors = tests = 0;
}

function testMat3() {
    errors = tests = 0;
    console.log("___ Testing Mat3: ___");

    let t1 = new Vec3(0, 0, 0);
    let t2 = new Vec3(3, 7, 2);
    let t3 = new Vec3(-1, 8, 3);
    let t4 = new Vec3(-4, 0, 0);
    let t5 = new Vec3(34645747, -2343434, 1290312);
    let t6 = new Vec3(3.173, -0.6632, 0.43337);
    let t7 = new Vec3(-3, 1, 0);
    let t8 = new Vec3(0, 0, 7);

    let m1 = new Mat3();
    let m2 = new Mat3(t1, t1, t1);
    let m3 = new Mat3(t2, t3, t7);
    let m4 = new Mat3(-3,0,0, 13,3,-9, 3,3,-1);
    let m5 = new Mat3(t5, t6, t5);

    console.log("   Testing type:");
    assertEquals(   m2.type,                    "Mat3"                                                          );
    assertEquals(   m5.type,                    "Mat3"                                                          );
    console.log("   Testing toString:");
    assertEquals(   m2.toString,                "(0\t\t0\t\t0)\n(0\t\t0\t\t0)\n(0\t\t0\t\t0)"                   );
    assertEquals(   m3.toString,                `(${ t2.x }\t\t${ t3.x }\t\t${ t7.x })\n(${ t2.y }\t\t${ t3.y }\t\t${ t7.y })\n(${ t2.z }\t\t${ t3.z }\t\t${ t7.z })`);
    console.log("   Testing component getters:");
    assertEquals(   m2.col0,                    t1                                                              );
    assertEquals(   m3.col1,                    t3                                                              );
    assertEquals(	m5.col2,					t5																);
    assertEquals(	m4.col2,					new Vec3(3,3,-1)												);
    assertEquals(	m4.row2,					new Vec3(0,-9,-1)												);
    assertEquals(	m5.row2,					new Vec3(t5.z, t6.z, t5.z)										);
    console.log("   Testing equality:");
    assertEquals(   m5,                         m5                                                              );
    assertEquals(   m1,                         new Mat3()                                                      );
    console.log("   Testing negation:");
    assertEquals(   m2.neg,                     m2                                                              );
    assertEquals(   m5.neg,                     new Mat3(t5.neg, t6.neg, t5.neg)                                );
    assertEquals(   m4.neg,                     new Mat3(new Vec3(3,0,0), new Vec3(-13,-3,9), new Vec3(-3,-3,1)));
    console.log("   Testing isIdentity:");
    assertEquals(   m1.isIdentity,              true                                                            );
    assertEquals(   m2.isIdentity,              false                                                           );
    assertEquals(   m5.isIdentity,              false                                                           );
    console.log("   Testing transposed:");
    assertEquals(   m1.transposed,              m1                                                              );
    assertEquals(   m2.transposed,              m2                                                              );
    assertEquals(   m5.transposed,              new Mat3(new Vec3(t5.x, t6.x, t5.x), new Vec3(t5.y, t6.y, t5.y), new Vec3(t5.z, t6.z, t5.z)));
    console.log("   Testing determinant:");
    assertEquals(   m1.determinant,             1                                                               );
    assertEquals(   m2.determinant,             0                                                               );
    assertEquals(   m3.determinant,             -26			                                                    );
    console.log("   Testing inverted:");
    assertEquals(   m1.inverted,                m1.neg                                                          );  // TODO!
    assertEquals(   m2.inverted,                m1.neg                                                          );  // TODO!
    assertEquals(   m3.inverted,                m1.neg                                                          );  // TODO!
    console.log("   Testing addition:");
    assertEquals(   m1.add(m1),                 new Mat3(2,0,0, 0,2,0, 0,0,2)			                        );
    assertEquals(   m2.add(m5),                 m5                                                              );
    assertEquals(   m3.add(m5),                 new Mat3(t2.add(t5), t3.add(t6), t7.add(t5))                    );
    assertEquals(   m4.add(m5),                 m5.add(m4)                                                      );
    console.log("   Testing subtraction:");
    assertEquals(   m1.sub(m1),                 m2                                                              );
    assertEquals(   m5.sub(m5),                 m2                                                              );
    assertEquals(   m3.sub(m5),                 new Mat3(t2.sub(t5), t3.sub(t6), t7.sub(t5))					);
    assertEquals(   m4.sub(m5),                 m4.add(m5.neg)                                                  );
    console.log("   Testing scalar multiplication:");
    assertEquals(   m5.mul(0),                  m2                                                              );
    assertEquals(   m1.mul(-3),                 new Mat3(-3,0,0, 0,-3,0, 0,0,-3)		                        );
    assertEquals(   m2.mul(-1235.6790),         m2                                                              );
    assertEquals(   m3.mul(4),                  new Mat3(m3.col0.mul(4), m3.col1.mul(4), m3.col2.mul(4))	    );
    console.log("   Testing scalar division:");
    assertEquals(   m5.div(-3.3),               new Mat3(m5.col0.div(-3.3), m5.col1.div(-3.3), m5.col2.div(-3.3)));
    assertEquals(   m1.div(4),                  new Mat3(1/4,0,0, 0,1/4,0, 0,0,1/4)                      		);
    assertEquals(   m2.div(-1235.6790),         m2                                                              );
    assertEquals(   m3.div(4),                  new Mat3(m3.col0.div(4), m3.col1.div(4), m3.col2.div(4))	    );
    {
        let threw = false;
        let res;
        try {
            res = m5.div(0);
        } catch(err) {
            threw = true;
        }
        assert(threw, `div did not throw an error on ${m2.toString} / 0. Result: ${res}.`);
    }
   	console.log("   Testing matrix-vector multiplication:");
    assertEquals(   m1.mul(t5),                 t5                                                              );
    assertEquals(   m5.mul(t1),                 t1                                                              );
    assertEquals(   m3.mul(t2),                 new Vec3(-4,79,27)							              		);
    assertEquals(   m2.mul(t5),                 t1											                    );
    console.log("   Testing matrix multiplication:");
    assertEquals(   m1.mul(m5),                 m5                                                              );
    assertEquals(   m5.mul(m1),                 m5                                                              );
    assertEquals(   m3.mul(m4),                 new Mat3(-9,-21,-6, 63,106,35, 9,44,15)			                );
    assertEquals(   m4.mul(m3),                 new Mat3(88,27,-65, 116,33,-75, 22,3,-9)	                    );

    if (errors === 0) {
        console.log(" >>> ALL " + tests + " TESTS PASSED.");
    } else {
        console.log(" >>> TESTS FINISHED WITH " + errors + " errors (out of " + tests + " tests).");
    }
    errors = tests = 0;
}

function testMat4() {
    errors = tests = 0;
    console.log("___ Testing Mat4: ___");

    let t1 = new Vec4(0, 0, 0, 0);
    let t2 = new Vec4(3, 7, 2, 4);
    let t3 = new Vec4(-1, 8, 3, -2);
    let t4 = new Vec4(-4, 0, 0, 0);
    let t5 = new Vec4(34645747, -2343434, 1290312, -883622);
    let t6 = new Vec4(3.173, -0.6632, 0.43337, -2.36377);
    let t7 = new Vec4(-3, 1, 5, 0);
    let t8 = new Vec4(0, 0, 0, -3);

    let m1 = new Mat4();
    let m2 = new Mat4(t1, t1, t1, t1);
    let m3 = new Mat4(t2, t3, t7, t2);
    let m4 = new Mat4(-3,0,0,3, 13,3,-9,4, 3,3,-1,8, 1,-1,6,2);
    let m5 = new Mat4(t5, t6, t5, t6);

    console.log("   Testing type:");
    assertEquals(   m2.type,                    "Mat4"                                                          );
    assertEquals(   m5.type,                    "Mat4"                                                          );
    console.log("   Testing toString:");
    assertEquals(   m2.toString,                "(0\t\t0\t\t0\t\t0)\n(0\t\t0\t\t0\t\t0)\n(0\t\t0\t\t0\t\t0)\n(0\t\t0\t\t0\t\t0)");
    assertEquals(   m3.toString,                `(${ t2.x }\t\t${ t3.x }\t\t${ t7.x }\t\t${ t2.x })\n(${ t2.y }\t\t${ t3.y }\t\t${ t7.y }\t\t${ t2.y })\n(${ t2.z }\t\t${ t3.z }\t\t${ t7.z }\t\t${ t2.z })\n(${ t2.w }\t\t${ t3.w }\t\t${ t7.w }\t\t${ t2.w })`);
    console.log("   Testing component getters:");
    assertEquals(   m2.col0,                    t1                                                              );
    assertEquals(   m3.col1,                    t3                                                              );
    assertEquals(	m5.col3,					t6																);
    assertEquals(	m4.col3,					new Vec4(1,-1,6,2)												);
    assertEquals(	m4.row3,					new Vec4(3,4,8,2)												);
    assertEquals(	m5.row3,					new Vec4(t5.w, t6.w, t5.w, t6.w)								);
    console.log("   Testing equality:");
    assertEquals(   m5,                         m5                                                              );
    assertEquals(   m1,                         new Mat4()                                                      );
    assertDoesNotEqual( m2,						m3																);
    console.log("   Testing negation:");
    assertEquals(   m2.neg,                     m2                                                              );
    assertEquals(   m5.neg,                     new Mat4(t5.neg, t6.neg, t5.neg, t6.neg)                        );
    assertEquals(   m4.neg,                     new Mat4(3,-0,-0,-3, -13,-3,9,-4, -3,-3,1,-8, -1,1,-6,-2)		);
    console.log("   Testing isIdentity:");
    assertEquals(   m1.isIdentity,              true                                                            );
    assertEquals(   m2.isIdentity,              false                                                           );
    assertEquals(   m5.isIdentity,              false                                                           );
    console.log("   Testing transposed:");
    assertEquals(   m1.transposed,              m1                                                              );
    assertEquals(   m2.transposed,              m2                                                              );
    assertEquals(   m5.transposed,              new Mat4(t5.x,t6.x,t5.x,t6.x, t5.y,t6.y,t5.y,t6.y, t5.z,t6.z,t5.z,t6.z, t5.w,t6.w,t5.w,t6.w));
    console.log("   Testing determinant:");
    assertEquals(   m1.determinant,             1                                                               );
    assertEquals(   m2.determinant,             0                                                               );
    assertEquals(   m3.determinant,             0			                                                    );
    assertEquals(	m4.determinant,				-786															);
    assertAlmostEquals(	m5.determinant,			0,														0.01	);
    console.log("   Testing inverted:");
    assertEquals(   m1.inverted,                m1.neg                                                          );  // TODO!
    assertEquals(   m2.inverted,                m1.neg                                                          );  // TODO!
    assertEquals(   m3.inverted,                m1.neg                                                          );  // TODO!
    console.log("   Testing addition:");
    assertEquals(   m1.add(m1),                 new Mat4(2,0,0,0, 0,2,0,0, 0,0,2,0, 0,0,0,2)	                );
    assertEquals(   m2.add(m5),                 m5                                                              );
    assertEquals(   m3.add(m5),                 new Mat4(t2.add(t5), t3.add(t6), t7.add(t5), t2.add(t6))		);
    assertEquals(   m4.add(m5),                 m5.add(m4)                                                      );
    console.log("   Testing subtraction:");
    assertEquals(   m1.sub(m1),                 m2                                                              );
    assertEquals(   m5.sub(m5),                 m2                                                              );
    assertEquals(   m3.sub(m5),                 new Mat4(t2.sub(t5), t3.sub(t6), t7.sub(t5), t2.sub(t6))		);
    assertEquals(   m4.sub(m5),                 m4.add(m5.neg)                                                  );
    assertEquals(	m2.sub(m5),					m5.neg 															);
    console.log("   Testing scalar multiplication:");
    assertEquals(   m5.mul(0),                  m2                                                              );
    assertEquals(   m1.mul(-3),                 new Mat4(-3,0,0,0, 0,-3,0,0, 0,0,-3,0, 0,0,0,-3)                );
    assertEquals(   m2.mul(-1235.6790),         m2                                                              );
    assertEquals(   m3.mul(4),                  new Mat4(m3.col0.mul(4), m3.col1.mul(4), m3.col2.mul(4), m3.col3.mul(4)));
    console.log("   Testing scalar division:");
    assertEquals(   m5.div(-3.3),               new Mat4(m5.col0.div(-3.3), m5.col1.div(-3.3), m5.col2.div(-3.3), m5.col3.div(-3.3)));
    assertEquals(   m1.div(4),                  new Mat4(1/4,0,0,0, 0,1/4,0,0, 0,0,1/4,0, 0,0,0,1/4)       		);
    assertEquals(   m2.div(-1235.6790),         m2                                                              );
    assertEquals(   m3.div(4),                  new Mat4(m3.col0.div(4), m3.col1.div(4), m3.col2.div(4), m3.col3.div(4)));
    {
        let threw = false;
        let res;
        try {
            res = m5.div(0);
        } catch(err) {
            threw = true;
        }
        assert(threw, `div did not throw an error on ${m2.toString} / 0. Result: ${res}.`);
    }
   	console.log("   Testing matrix-vector multiplication:");
    assertEquals(   m1.mul(t5),                 t5                                                              );
    assertEquals(   m5.mul(t1),                 t1                                                              );
    assertEquals(   m3.mul(t2),                 new Vec4(8,107,45,14)						              		);
    assertEquals(   m4.mul(t5),                 new Vec4(-131414569,-2275744,14498862,103118757)				);
    assertEquals(   m2.mul(t5),                 t1											                    );
    console.log("   Testing matrix multiplication:");
    assertEquals(   m1.mul(m5),                 m5                                                              );
    assertEquals(   m5.mul(m1),                 m5                                                              );
    assertEquals(   m5.mul(m2),                 m2                                                              );
    assertEquals(   m3.mul(m4),                 new Mat4(0,0,0,0, 75, 134,-2,62,33, 100,26,38,-8,19,33,14)		);
    assertEquals(   m4.mul(m3),                 new Mat4(92,23,-41,61, 114,35,-87,49, 37,18,-14,35, 92,23,-41,61));

    if (errors === 0) {
        console.log(" >>> ALL " + tests + " TESTS PASSED.");
    } else {
        console.log(" >>> TESTS FINISHED WITH " + errors + " errors (out of " + tests + " tests).");
    }
    errors = tests = 0;
}