class A{
    m1(){
        console.log("hi ");
    }
    m2(){
        console.log("Good MRNG");
    }

}
class B extends A{

}
/*let a1=new B()
a1.m1()
a1.m2()*/
new B().m1()
new B().m2()