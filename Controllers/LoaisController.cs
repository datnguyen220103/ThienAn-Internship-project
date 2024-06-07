﻿using Microsoft.AspNetCore.Mvc;
using MyWebApiApp.Data;
using MyWebApiApp.models;

namespace MyWebApiApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoaisController : Controller
    {
        private readonly MyDbContext _context;
        public LoaisController(MyDbContext context) { 
            _context = context;
        }
        [HttpGet]
        public IActionResult GetAll() { 
            var dsLoai = _context.Loais.ToList();
            return Ok(dsLoai);
        }
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var loai = _context.Loais.SingleOrDefault(lo => lo.MaLoai == id);
            if (loai != null)
            {
                return Ok(loai);

            }
            else { 
                return NotFound();
            }
            
        }
        [HttpPost]
        public IActionResult CreateNew(LoaiModel model) {
            try
            {
                var loai = new Loai
                {
                    TenLoai = model.TenLoai
                };
                _context.Add(loai);
                _context.SaveChanges();
                return Ok(loai);
            }
            catch
            {
                return BadRequest();
            }


        }

        [HttpPut("{id}")]
        public IActionResult UpdateById(int id, LoaiModel model)
        {
            var loai = _context.Loais.SingleOrDefault(lo => lo.MaLoai == id);
            if (loai != null)
            {
                loai.TenLoai = model.TenLoai;
                _context.SaveChanges();
                return NoContent();

            }
            else
            {
                return NotFound();
            }

        }
    }
}
