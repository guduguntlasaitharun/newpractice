class A
{
    get_Details()
    {
        console.log("GOOD MORNING 123");
    }
    get_Balance()
    {
        console.log("GOOD NIGHT 123");
    }

}

class B extends A{
    get_Details()
    {
        super.get_Balance()
        super.get_Details()
        console.log("GOOD MORNING");
    }
    get_Balance()
    {
        console.log("GOOD NIGHT");
    }
}
new B().get_Details();
new B().get_Balance();