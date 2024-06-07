using Microsoft.EntityFrameworkCore;
using MyWebApiApp.Data;

var builder = WebApplication.CreateBuilder(args);

// Thêm chuỗi kết nối từ appsettings.json
var connectionString = builder.Configuration.GetConnectionString("MyDb");

// Đăng ký DbContext với Dependency Injection
builder.Services.AddDbContext<MyDbContext>(options =>
    options.UseSqlServer(connectionString));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
