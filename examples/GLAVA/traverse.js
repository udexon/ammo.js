var t_s=""; var t_l;
function traverse(parent, event) {
	// parent.dispatchEvent(event);
	// console.log( Date.now () );
	for (var i in parent.children) {
		// console.log( "\\ "+ i );

    t_l = t_s.length;
    
    if (t_s.substring( t_l - 3)==' / ') {
        // console.log( "  last token / " )
        t_s = t_s.substring( 0, t_l - 3) 
    }
    else t_s += " \\ ";
    
    t_s += ' '+ i +' ';
    
	  // console.log( i );
		traverse(parent.children[i], event);

  	// console.log( "/" );		
  	t_s += " / ";
	}

}


                    t0 = JSON.parse(SP[t]);
                    t1 = JSON.parse(SP[t-l]); 
                    
                    var p0 = t0[0];
                    var p1 = t1[0];

                    var dx = p0.x - p1.x;
                    var dy = p0.y - p1.y;
                    var dz = p0.z - p1.z;
                    
                    var D2 = (dx*dx + dy*dy + dz*dz); 
                    
                    if  ( D2 < 0.0001 ) SP.pop();
                    else console.log( D2 );
 
                    
var i; for (i=0; i<62; i++) {

                    // var t0 = JSON.parse(SP[t]);
                    // var t1 = JSON.parse(SP[t-l]); 
                    
                    var t0 = JSON.parse(S[2][i]);
                    var t1 = JSON.parse(S[4][i]);         
                    
                    var p0 = t0[0];
                    var p1 = t1[0];

                    var dx = p0.x - p1.x;
                    var dy = p0.y - p1.y;
                    var dz = p0.z - p1.z;
                    
                    var D2 = (dx*dx + dy*dy + dz*dz); 
                    
//                    if  ( D2 < 0.0001 ) SP.pop();
//                    else console.log( D2 );


if (D2 > 1) console.log(i, D2, S[2][i], S[4][i])

}

