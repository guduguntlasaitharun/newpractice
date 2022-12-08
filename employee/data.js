let users=[{"id":1,"first_name":"Heriberto","last_name":"Odger","email":"hodger0@t-online.de","gender":"Male"},
{"id":2,"first_name":"Rodolfo","last_name":"Juhruke","email":"rjuhruke1@bing.com","gender":"Male"},
{"id":3,"first_name":"Hedwiga","last_name":"Seer","email":"hseer2@dedecms.com","gender":"Female"},
{"id":4,"first_name":"Fidole","last_name":"Vynehall","email":"fvynehall3@google.de","gender":"Male"},
{"id":5,"first_name":"Gare","last_name":"Dunkley","email":"gdunkley4@google.nl","gender":"Male"},
{"id":6,"first_name":"Kathleen","last_name":"Thurby","email":"kthurby5@mtv.com","gender":"Female"},
{"id":7,"first_name":"Yurik","last_name":"Brogioni","email":"ybrogioni6@techcrunch.com","gender":"Male"},
{"id":8,"first_name":"Vaughan","last_name":"Broadbridge","email":"vbroadbridge7@plala.or.jp","gender":"Male"},
{"id":9,"first_name":"Alfie","last_name":"Pizzie","email":"apizzie8@nps.gov","gender":"Female"},
{"id":10,"first_name":"Terry","last_name":"Aisman","email":"taisman9@yahoo.co.jp","gender":"Female"},
{"id":11,"first_name":"Mirelle","last_name":"Fennelow","email":"mfennelowa@dailymail.co.uk","gender":"Female"},
{"id":12,"first_name":"Devlin","last_name":"Malacrida","email":"dmalacridab@japanpost.jp","gender":"Male"},
{"id":13,"first_name":"Pattie","last_name":"Maroney","email":"pmaroneyc@unblog.fr","gender":"Male"},
{"id":14,"first_name":"Derward","last_name":"Pratte","email":"dpratted@shareasale.com","gender":"Male"},
{"id":15,"first_name":"Easter","last_name":"McKnockiter","email":"emcknockitere@weather.com","gender":"Female"},
{"id":16,"first_name":"Stanly","last_name":"Jowitt","email":"sjowittf@quantcast.com","gender":"Male"},
{"id":17,"first_name":"Rodrigo","last_name":"Bendel","email":"rbendelg@zimbio.com","gender":"Male"},
{"id":18,"first_name":"Niki","last_name":"Albarez","email":"nalbarezh@imgur.com","gender":"Male"},
{"id":19,"first_name":"Haskell","last_name":"Ruckledge","email":"hruckledgei@youku.com","gender":"Male"},
{"id":20,"first_name":"Jerad","last_name":"Lundy","email":"jlundyj@taobao.com","gender":"Non-binary"},
{"id":21,"first_name":"Amata","last_name":"Lorenzo","email":"alorenzok@reverbnation.com","gender":"Female"},
{"id":22,"first_name":"Emelen","last_name":"Covil","email":"ecovill@deliciousdays.com","gender":"Male"},
{"id":23,"first_name":"Gilberta","last_name":"Eisikowitz","email":"geisikowitzm@bbb.org","gender":"Genderfluid"},
{"id":24,"first_name":"Nanci","last_name":"Mickleburgh","email":"nmickleburghn@unblog.fr","gender":"Female"},
{"id":25,"first_name":"Marilee","last_name":"Keetch","email":"mkeetcho@pen.io","gender":"Polygender"},
{"id":26,"first_name":"Berte","last_name":"Timbrell","email":"btimbrellp@desdev.cn","gender":"Agender"},
{"id":27,"first_name":"Hercules","last_name":"Guillain","email":"hguillainq@twitpic.com","gender":"Male"},
{"id":28,"first_name":"Morgan","last_name":"Pettifor","email":"mpettiforr@last.fm","gender":"Male"},
{"id":29,"first_name":"Serge","last_name":"Counter","email":"scounters@bandcamp.com","gender":"Agender"},
{"id":30,"first_name":"Othelia","last_name":"Fraczek","email":"ofraczekt@discovery.com","gender":"Female"},
{"id":31,"first_name":"Corene","last_name":"Baysting","email":"cbaystingu@bravesites.com","gender":"Genderqueer"},
{"id":32,"first_name":"Ibbie","last_name":"Tafani","email":"itafaniv@home.pl","gender":"Female"},
{"id":33,"first_name":"Carin","last_name":"Bloy","email":"cbloyw@digg.com","gender":"Female"},
{"id":34,"first_name":"Antonius","last_name":"Sedgemore","email":"asedgemorex@list-manage.com","gender":"Male"},
{"id":35,"first_name":"Elsey","last_name":"Clarke","email":"eclarkey@geocities.jp","gender":"Female"},
{"id":36,"first_name":"Red","last_name":"Dalziel","email":"rdalzielz@fema.gov","gender":"Non-binary"},
{"id":37,"first_name":"Bartholomeus","last_name":"Josskovitz","email":"bjosskovitz10@wp.com","gender":"Male"},
{"id":38,"first_name":"Darcy","last_name":"Jewer","email":"djewer11@over-blog.com","gender":"Male"},
{"id":39,"first_name":"Garik","last_name":"Durdle","email":"gdurdle12@wordpress.org","gender":"Male"},
{"id":40,"first_name":"Gates","last_name":"Hoffmann","email":"ghoffmann13@cbc.ca","gender":"Female"},
{"id":41,"first_name":"Jessa","last_name":"Houlridge","email":"jhoulridge14@oaic.gov.au","gender":"Female"},
{"id":42,"first_name":"Richard","last_name":"Blesli","email":"rblesli15@yahoo.co.jp","gender":"Male"},
{"id":43,"first_name":"Vernon","last_name":"McIleen","email":"vmcileen16@bloomberg.com","gender":"Male"},
{"id":44,"first_name":"Tedda","last_name":"Biaggi","email":"tbiaggi17@gmpg.org","gender":"Non-binary"},
{"id":45,"first_name":"Artur","last_name":"Ferrao","email":"aferrao18@1und1.de","gender":"Male"},
{"id":46,"first_name":"Rodie","last_name":"Siene","email":"rsiene19@harvard.edu","gender":"Female"},
{"id":47,"first_name":"Gertrud","last_name":"Rosewall","email":"grosewall1a@fastcompany.com","gender":"Female"},
{"id":48,"first_name":"Belva","last_name":"Hawkeswood","email":"bhawkeswood1b@networksolutions.com","gender":"Female"},
{"id":49,"first_name":"Winston","last_name":"Mavin","email":"wmavin1c@fc2.com","gender":"Male"},
{"id":50,"first_name":"Ashly","last_name":"Vagg","email":"avagg1d@sina.com.cn","gender":"Female"}]


function displayUsers() {
    let rows = ""
    for (user of users) {
        rows = rows + `<tr>
                             <td>${user.id}</td>
                             <td>${user.first_name}</td>
                             <td>${user.email}</td>
                             <td>${user.gender}</td>
                        </tr>`
    }

    document.getElementById('abc').innerHTML = rows
}