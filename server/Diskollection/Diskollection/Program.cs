using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Diskollection.Models;
using Diskollection.Data;
using System.Text.Json.Serialization;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<DiskollectionContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DiskollectionContext") ?? throw new InvalidOperationException("Connection string 'DiskollectionContext' not found.")));

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      builder =>
                      {
                          builder.AllowAnyMethod()
                          .AllowAnyOrigin()
                          .AllowAnyHeader();
                      });
});
builder.Services.AddControllers().AddJsonOptions(x =>
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles); ;
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();




// Data intialization
var app = builder.Build();
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    MockArtists.Initialize(services);
    //MockAlbums.Initialize(services);
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapControllers();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();



app.Run();
