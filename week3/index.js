const z = require("zod")

function validateArray(arr)
{
    const schema = z.array(z.string());

    const response = schema.safeParse(arr);
    console.log(response);

}


validateArray(["avi","bega"])