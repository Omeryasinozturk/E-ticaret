using Microsoft.EntityFrameworkCore;
using API.Entity;

namespace API.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base (options)
    {
        
    }
    public DbSet<Product> Products { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Product>().HasData(
            new List<Product>
            {  
             new Product{ Id=1,Name="Iphone 17",Description="Telefon AÇIKLAMASI",ImageUrl="1.jpg",IsActive=true,Stock=100,Price=70000},
             new Product{ Id=2,Name="Iphone 17 PRO",Description="Telefon AÇIKLAMASI",ImageUrl="2.jpg",IsActive=true,Stock=100,Price=80000},
             new Product{ Id=3,Name="Iphone 17 PRO MAX",Description="Telefon AÇIKLAMASI",ImageUrl="3.jpg",IsActive=false,Stock=100,Price=90000},
             new Product{ Id=4,Name="Xiaomi 17 PRO",Description="Telefon AÇIKLAMASI",ImageUrl="4.jpg",IsActive=true,Stock=100,Price=50000},
             new Product{ Id=5,Name="Xiaomi 17 PRO MAX",Description="Telefon AÇIKLAMASI",ImageUrl="5.jpg",IsActive=true,Stock=100,Price=57000}

            }
        );
    }
}