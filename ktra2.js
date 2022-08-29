const data = [
    {
        price: 200,
        name: 'Bản ủi',
        address: 'Tôn Thất Tùng, TPHCM'
    },
    {
        price: 3000,
        name: 'Máy giặt',
        address: 'Hai Bà Trưng, Quận Phú Nhuận, TPHCM'
    },
    {
        price: 600,
        name: 'Bàn làm việc',
        address: 'Nam Kỳ Khởi Nghĩa, Quận 3, TPHCM'
    },
    {
        price: 1000,
        name: 'Ghế làm việc',
        address: 'Đống đa, Quận 3, Hà Nội'
    },
    {
        price: 25000,
        name: 'Máy tính',
        address: 'Cái bè, Huyện Cái bè, TPHCM'
    },
    {
        price: 9000,
        name: 'Màn hình tivi',
        address: 'Châu Đốc, Kiên Giang'
    },
    {
        price: 30000,
        name: 'Iphone 13',
        address: 'American'
    },
    {
        price: 28000,
        name: 'Samsum s22',
        address: 'Korea'
    }, ]

    function sanpham(name,price,address){
        console.log("San pham: " + name + "," + "gia: " + price + "," + "Dia chi mua hang: " + address);}

    const baihai = data.filter(
        function C(item){
            if (item.price >= 25000) return true;
            return false
        }
    )
        baihai.map(
            function C(item){
                console.log(
                    sanpham(item.name, item.price, item.address)
                )
            }
        )