<%-- 
    Document   : pubgm
    Created on : Jul 4, 2022, 7:50:06 PM
    Author     : Wikon3
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Pubg Mobile</title>
        <jsp:include page='layouts/headgame.jsp'>
            <jsp:param name="title" value="Pubg Mobile" />
        </jsp:include>
    </head>

<body>
    <jsp:include page='layouts/navbarpubgm.jsp'></jsp:include>

    <div class="card-image">
        <div class="row">
            <img src="public/assets/images/pubg1.jpeg" alt="">
        </div>

    </div>
    <div class="row">
        <div class="col-12">
            <h1>Pubg Mobile</h1>
            <p>Top up UC Pubg Mobile hanya dalam hitungan detik!</p>
            <p>Cukup masukan Username & ID PUBGM Anda, pilih jumlah UC yang Anda inginkan, selesaikan pembayaran, dan UC akan secara langsung ditambahkan ke akun PUBGM Anda.</p>
            <p>Unduh dan mainkan PUBG MOBILE sekarang!</p>
        </div>
    </div>
    <div id="data1" class="row">
        <div class="col-12 background-data">
            <h1>Masukan Data Anda</h1>
            <input type="text" value="" class="input-submit" id="nama" placeholder="Input your Username" onkeydown="return /[a-z]/i.test(event.key)">
            <input type="number" value="" class="input-submit" id="uid" placeholder="Input your ID">
        </div>
    </div>

    <div class="col-12" id="data2">
        <div class="row background-data">
            <h2>Pilihan Anda</h2>
            <div class="col-12 ">
                <div class="row">
                    <div class="col-3 border-pilihan" id="vpx" onclick="clkvp()">
                        <input type="image" src="public/assets/images/uc1.png">
                        <p>100 UC</p>
                    </div>
                    <div class="col-3 border-pilihan" id="vps" onclick="clkvp1()">
                        <input type="image" src="public/assets/images/uc1.png">
                        <p>250 UC</p>
                    </div>
                    <div class="col-3 border-pilihan" id="vpy" onclick="clkvp2()">
                        <input type="image" src="public/assets/images/uc1.png">
                        <p>500 UC</p>
                    </div>
                    <div class="col-3 border-pilihan" id="vpz" onclick="clkvp3()">
                        <input type="image" src="public/assets/images/uc1.png">
                        <p>800 UC</p>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="row">
                    <div class="col-3 border-pilihan" id="vpx1" onclick="clkvp4()">
                        <input type="image" src="public/assets/images/uc1.png">
                        <p>1500 UC</p>
                    </div>
                    <div class="col-3 border-pilihan" id="vps1" onclick="clkvp5()">
                        <input type="image" src="public/assets/images/uc1.png">
                        <p>2200 UC</p>
                    </div>
                    <div class="col-3 border-pilihan" id="vpy1" onclick="clkvp6()">
                        <input type="image" src="public/assets/images/uc1.png">
                        <p>2800 UC</p>
                    </div>
                    <div class="col-3 border-pilihan" id="vpz1" onclick="clkvp7()">
                        <input type="image" src="public/assets/images/uc1.png">
                        <p>4000 UC</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-12" id="data3">
        <div class="row background-data">
            <h2>Pembayaran</h2>
            <div class="col-12">
                <div class="col-6">
                    <div class="row wkwk" id="bcaa" onclick="bca()">
                        <input type="image" src="public/assets/images/BCA3.png">
                    </div>
                </div>
                <div class="col-6">
                    <div class="row wkwk" id="gopayy" onclick="gopay()">
                        <input type="image" src="public/assets/images/Gopay1.png">
                    </div>
                </div>
                <button type="submit" class="input-submit" onclick="sbmt()">submit</button>
            </div>
        </div>
    </div>
    <footer>
        <div class="contact">
            <h1>SOCIAL MEDIA</h1>
            <a href="https://instagram.com/jamal_gaming22" target="_blank" rel="noopener noreferrer"><img src="public/assets/images/ig.png" alt=""></a>
            <a href="https://wa.me/6287884541593" target="_blank" rel="noopener noreferrer"><img src="public/assets/images/WA2.png" alt=""></a>
        </div>
    </footer>
    <div id="copyright">
        &copy;2022 JAMALGAMING
    </div>

    <script src="public/assets/backend/myscripts.js"></script>
    

</body>
</html>
