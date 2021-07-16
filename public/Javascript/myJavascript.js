// bar
const menu = document.querySelector(".bar")
const headerList = document.querySelector(".header-list");
const bar = document.querySelector(".header-bar");
bar.onclick = function() {
    headerList.classList.toggle("check")
    if (document.querySelector(".check")) {
        menu.classList.remove("fa-bars")
        menu.classList.add("fa-times")
    } else {
        menu.classList.remove("fa-times")
        menu.classList.add("fa-bars")
    }
}

const text = document.querySelector(".title-text >p");
const btnShow = document.querySelector(".btn-show");
btnShow.onclick = function() {
    text.innerHTML = `<p>Ngày nay với xu thế phát triển hội nhập, toàn cầu hóa, đời sống của con người trở nên phát triển nhanh chóng. Chính vì lẽ đó, tiêu chí ăn no mặc ấm đã chuyển sang một giai đoạn mới cao hơn đó là ăn ngon, mặc đẹp. Yêu cầu người
    Việt Nam ngày càng khắt khe hơn về mọi mặt không chỉ về hình thức mà còn về chất lượng, đặc biệt là vấn đề ăn uống. <br> Nhóm chúng tôi đã có dịp đi du lịch và thưởng thức được nhiều các món ăn và thức uống ngon, mỗi thứ đều
    mang một hương vị, văn hóa ẩm thực đặc trưng của từng vùng miền, từng đất nước. <br> Như các nước Châu Âu, các món ăn và thức uống đều được chế biến một cách cầu kỳ, trang trí món ăn một cách đẹp mắt, thu hút. Còn tại Việt Nam rất
    chú ý đến việc pha trộn gia vị mang đến khẩu vị ngon miệng. Đặc biệt các loại bánh mặn - ngọt ở Châu Âu - Châu Á đều có hương vị và cách chế biến khác nhau. Thế thì tại sao chúng ta không kết hợp cả hai yếu tố với nhau? Không
    những phải ăn ngon, thức uống hấp dẫn mà còn phải vệ sinh an toàn sức khỏe tuyệt đối thì đó mới gọi là đẳng cấp, nghệ thuật ẩm thực.<br> Và đó cũng là lý do Perfect Team ra đời vào ngày 15/7/2021. Chúng tôi cung cấp các loại
    hình tổ chức tiệc, hội nghị,... Với thực đơn có sự lựa chọn đa dạng dành cho quý khách, từ các món bánh mặn - ngọt, các món chế biến từ hải sản, đặc sản quốc gia, vừng miền khác nhau. Và phong cách phục vụ minh bạch, rõ ràng
    cùng món ăn ngon, hỗ trợ trang trí không gian đẹp dẽ, thoải mái, giá phải chăng. <br> Điều đáng nói nữa là các vị khách quý lựa chọn chúng tôi hoàn toàn yên tâm về sức khỏe vì nhà hàng chế biến theo “nguyên tắc 3K”
    <br> <b>“Không dùng dầu tái sinh <br> Không phẩm màu <br> Không chất phụ gia” <br></b> Chỉ sử dụng thực phẩm tươi sống, An toàn vệ sinh tuyệt đối”. <br> </p>`
    btnDis.style.display = "block"
    btnShow.style.display = "none"
}
const btnDis = document.querySelector(".btn-dis");
if (btnDis) {
    btnDis.onclick = function() {
        text.innerHTML = `<p>Ngày nay với xu thế phát triển hội nhập, toàn cầu hóa, đời sống của con người trở nên phát triển nhanh chóng. Chính vì lẽ đó, tiêu chí ăn no mặc ấm đã chuyển sang một giai đoạn mới cao hơn đó là ăn ngon, mặc đẹp. Yêu cầu người
Việt Nam ngày càng khắt khe hơn về mọi mặt không chỉ về hình thức mà còn về chất lượng, đặc biệt là vấn đề ăn uống. <br> Nhóm chúng tôi đã có dịp đi du lịch và thưởng thức được nhiều các món ăn và thức uống ngon, mỗi thứ đều
mang một hương vị, văn hóa ẩm thực đặc trưng của từng vùng miền, từng đất nước.
</p>`
        btnShow.style.display = "block"
        btnDis.style.display = "none"
    }
}

var timedelay = 0;
setInterval(() => {
    var img = document.querySelector(".slider img")
    var index = Number(img.dataset.id) + 1
    if (index > 6) {
        index = 1
    }

    img.dataset.id = index;
    img.src = `./image/${index}.jpg`;
    img.style.animation = `showLeft 3s infinite ${0}`
}, 3000)