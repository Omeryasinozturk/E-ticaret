using System.Net.Http.Headers;
using API.Data;
using API.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("/api/products")] //[Route("/api/[controller]")] olarak da yazılsa olur burası direkt Product olduğu için istekler buraya düşecek
public class ProductController : ControllerBase //Controller dan kalıtım alınsaydı geriye bir view döndürme vb durum
//olabilirdi fakat biz json data ile işlemlerimizi sağlayacağız.
{
    private readonly DataContext _context;
    public ProductController(DataContext context) // Constructor Injection 
    {//Bir sınıfın çalışması için başka bir şeye ihtiyacı varsa, onu gidip kendi oluşturmamalı — dışarıdan hazır almalı.Bu da constructor üzerinden verilir. 
        _context = context;
    }


    [HttpGet] //Yazsamda yazmasamda get olur.
    public async Task<IActionResult> GetProducts()
    {
        var products =await _context.Products.ToListAsync();
        return Ok(products);
    }
    [HttpGet("{id}")] //burada birden fazla get metodu olduğu için belirtip route içerisinde id bilgisi gönderileceği bilgisini belirtmek gerekli.
    public async Task<IActionResult> GetProduct(int? id)
    {
            if (id == null)
            {
            return NotFound();
            }
            
            // var products = await _context.Products.FirstOrDefaultAsync(i=> i.Id==id);
            var products = await _context.Products.FindAsync(id);
            
            if (products == null)
            {
            return NotFound();
            }
         
          
          
        return Ok(products);
    }

}