using System.ComponentModel.DataAnnotations;

namespace MyWebApiApp.models
{
    public class LoaiModel
    {
        [Required]
        [MaxLength(50)]
        public string TenLoai { get; set; }
    }
}
