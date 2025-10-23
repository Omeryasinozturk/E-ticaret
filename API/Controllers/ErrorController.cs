using Microsoft.AspNetCore.Mvc;

namespace   API.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class ErrorController : ControllerBase
{
    [HttpGet("not-found")]
    public IActionResult NotFoundError()
    {
        return NotFound();//404;
    }
    
    [HttpGet("bad-request")]
    public IActionResult BadRequestError()
    {
        return BadRequest(); //400;
    }

    [HttpGet("unautohrized")]
    public IActionResult UnautohrizedError()
    {
        return Unauthorized(); //401;
    }

    [HttpGet("validation-error")]
    public IActionResult ValidationError()
    {
        ModelState.AddModelError("Problem1", "This is the first error");
        ModelState.AddModelError("Problem2", "This is the second error");
        return ValidationProblem(); // 400 with details
    }
    
    [HttpGet("server-error")]
    public IActionResult ServerError()
    {       
        throw new Exception("This is a server error"); //500
    }
}