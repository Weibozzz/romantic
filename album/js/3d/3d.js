var imgFileNames = ["0B4A5181","0B4A5195","0B4A5201","0B4A5231","0B4A5253","0B4A5254","0B4A5269","0B4A5281","0B4A5291","0B4A5299","0B4A5302","0B4A5318","0B4A5319","0B4A5322","0B4A5361","0B4A5367","0B4A5370","0B4A5414","0B4A5432","20230114-211522","20230114-211535","2023_01_28_10_57_00","IMG_20220324_165718","IMG_20220403_144046","IMG_20220403_151330","IMG_20220410_203106","IMG_20220415_230642","IMG_20220416_201043","IMG_20220416_202042","IMG_20220501_000043","IMG_20220501_150020","IMG_20220501_150617","IMG_20220511_195408","IMG_20220515_153423","IMG_20220515_153735","IMG_20220529_160240 (1)","IMG_20220529_160240","IMG_20220529_161152","IMG_20220702_203823","IMG_20221029_185701","IMG_20221212_092408","IMG_20221216_210447","IMG_20230101_024141","IMG_20230101_200852","IMG_20230106_111150","IMG_20230109_102306","IMG_20230109_115317","IMG_20230109_133609","IMG_20230109_134119","IMG_20230109_134141","IMG_20230109_134747","IMG_20230109_134919","IMG_20230109_135320","IMG_20230109_135357","IMG_20230109_135514","IMG_20230109_135605","IMG_20230109_135912","IMG_20230109_140113","IMG_20230109_150250","IMG_20230109_151346","IMG_20230109_153205","IMG_20230109_154604","IMG_20230109_160552","IMG_20230109_163918","IMG_20230109_163946","IMG_20230109_164435","IMG_20230109_200628","IMG_20230109_200732","IMG_20230109_200835","IMG_20230109_201057","IMG_20230109_201133","IMG_20230109_201202","IMG_20230109_201237","IMG_20230109_201433","IMG_20230109_201534","IMG_20230109_201852","IMG_20230109_202606","IMG_20230109_202721","IMG_20230109_202911","IMG_20230109_202948","IMG_20230109_203030","IMG_20230109_210502","IMG_20230110_201015","IMG_20230116_153349","IMG_20230126_220246","IMG_20230214_165007","MTXX_20230101201215107","MTXX_MH20221223164814811","MTXX_MH20221223164917292","MTXX_MH20221223165024978","MTXX_MR20230109203305509","MTXX_MR20230109203933460","Screenshot_2023-01-16-14-39-34-661_com.tencent.mm","iHaier20230116-143410","mmexport1650111386040","mmexport1650111490713","mmexport1651481564330","mmexport1656828373253","mmexport1664284603392","mmexport1664284607474","mmexport1672581986749","mmexport1673268838162","mmexport1673852137273","mmexport1674316681717","mmexport1674576619458","mmexport1676363937615","mmexport1676363940208","mmexport1676549859056"]
var MAX_IMG = imgFileNames.length


var table = [
    "H", "Hydrogen", "1.00794", 1, 1,
    "He", "Helium", "4.002602", 18, 1,
    "Li", "Lithium", "6.941", 1, 2,
    "Be", "Beryllium", "9.012182", 2, 2,
    "B", "Boron", "10.811", 13, 2,
    "C", "Carbon", "12.0107", 14, 2,
    "N", "Nitrogen", "14.0067", 15, 2,
    "O", "Oxygen", "15.9994", 16, 2,
    "F", "Fluorine", "18.9984032", 17, 2,
    "Ne", "Neon", "20.1797", 18, 2,
    "Na", "Sodium", "22.98976...", 1, 3,
    "Mg", "Magnesium", "24.305", 2, 3,
    "Al", "Aluminium", "26.9815386", 13, 3,
    "Si", "Silicon", "28.0855", 14, 3,
    "P", "Phosphorus", "30.973762", 15, 3,
    "S", "Sulfur", "32.065", 16, 3,
    "Cl", "Chlorine", "35.453", 17, 3,
    "Ar", "Argon", "39.948", 18, 3,
    "K", "Potassium", "39.948", 1, 4,
    "Ca", "Calcium", "40.078", 2, 4,
    "Sc", "Scandium", "44.955912", 3, 4,
    "Ti", "Titanium", "47.867", 4, 4,
    "V", "Vanadium", "50.9415", 5, 4,
    "Cr", "Chromium", "51.9961", 6, 4,
    "Mn", "Manganese", "54.938045", 7, 4,
    "Fe", "Iron", "55.845", 8, 4,
    "Co", "Cobalt", "58.933195", 9, 4,
    "Ni", "Nickel", "58.6934", 10, 4,
    "Cu", "Copper", "63.546", 11, 4,
    "Zn", "Zinc", "65.38", 12, 4,
    "Ga", "Gallium", "69.723", 13, 4,
    "Ge", "Germanium", "72.63", 14, 4,
    "As", "Arsenic", "74.9216", 15, 4,
    "Se", "Selenium", "78.96", 16, 4,
    "Br", "Bromine", "79.904", 17, 4,
    "Kr", "Krypton", "83.798", 18, 4,
    "Rb", "Rubidium", "85.4678", 1, 5,
    "Sr", "Strontium", "87.62", 2, 5,
    "Y", "Yttrium", "88.90585", 3, 5,
    "Zr", "Zirconium", "91.224", 4, 5,
    "Nb", "Niobium", "92.90628", 5, 5,
    "Mo", "Molybdenum", "95.96", 6, 5,
    "Tc", "Technetium", "(98)", 7, 5,
    "Ru", "Ruthenium", "101.07", 8, 5,
    "Rh", "Rhodium", "102.9055", 9, 5,
    "Pd", "Palladium", "106.42", 10, 5,
    "Ag", "Silver", "107.8682", 11, 5,
    "Cd", "Cadmium", "112.411", 12, 5,
    "In", "Indium", "114.818", 13, 5,
    "Sn", "Tin", "118.71", 14, 5,
    "Sb", "Antimony", "121.76", 15, 5,
    "Te", "Tellurium", "127.6", 16, 5,
    "I", "Iodine", "126.90447", 17, 5,
    "Xe", "Xenon", "131.293", 18, 5,
    "Cs", "Caesium", "132.9054", 1, 6,
    "Ba", "Barium", "132.9054", 2, 6,
    "La", "Lanthanum", "138.90547", 4, 9,
    "Ce", "Cerium", "140.116", 5, 9,
    "Pr", "Praseodymium", "140.90765", 6, 9,
    "Nd", "Neodymium", "144.242", 7, 9,
    "Pm", "Promethium", "(145)", 8, 9,
    "Sm", "Samarium", "150.36", 9, 9,
    "Eu", "Europium", "151.964", 10, 9,
    "Gd", "Gadolinium", "157.25", 11, 9,
    "Tb", "Terbium", "158.92535", 12, 9,
    "Dy", "Dysprosium", "162.5", 13, 9,
    "Ho", "Holmium", "164.93032", 14, 9,
    "Er", "Erbium", "167.259", 15, 9,
    "Tm", "Thulium", "168.93421", 16, 9,
    "Yb", "Ytterbium", "173.054", 17, 9,
    "Lu", "Lutetium", "174.9668", 18, 9,
    "Hf", "Hafnium", "178.49", 4, 6,
    "Ta", "Tantalum", "180.94788", 5, 6,
    "W", "Tungsten", "183.84", 6, 6,
    "Re", "Rhenium", "186.207", 7, 6,
    "Os", "Osmium", "190.23", 8, 6,
    "Ir", "Iridium", "192.217", 9, 6,
    "Pt", "Platinum", "195.084", 10, 6,
    "Au", "Gold", "196.966569", 11, 6,
    "Hg", "Mercury", "200.59", 12, 6,
    "Tl", "Thallium", "204.3833", 13, 6,
    "Pb", "Lead", "207.2", 14, 6,
    "Bi", "Bismuth", "208.9804", 15, 6,
    "Po", "Polonium", "(209)", 16, 6,
    "At", "Astatine", "(210)", 17, 6,
    "Rn", "Radon", "(222)", 18, 6,
    "Fr", "Francium", "(223)", 1, 7,
    "Ra", "Radium", "(226)", 2, 7,
    "Ac", "Actinium", "(227)", 4, 10,
    "Th", "Thorium", "232.03806", 5, 10,
    "Pa", "Protactinium", "231.0588", 6, 10,
    "U", "Uranium", "238.02891", 7, 10,
    "Np", "Neptunium", "(237)", 8, 10,
    "Pu", "Plutonium", "(244)", 9, 10,
    "Am", "Americium", "(243)", 10, 10,
    "Cm", "Curium", "(247)", 11, 10,
    "Bk", "Berkelium", "(247)", 12, 10,
    "Cf", "Californium", "(251)", 13, 10,
    "Es", "Einstenium", "(252)", 14, 10,
    "Fm", "Fermium", "(257)", 15, 10,
    "Md", "Mendelevium", "(258)", 16, 10,
    "No", "Nobelium", "(259)", 17, 10,
    "Lr", "Lawrencium", "(262)", 18, 10,
    "Rf", "Rutherfordium", "(267)", 4, 7,
    "Db", "Dubnium", "(268)", 5, 7,
    "Sg", "Seaborgium", "(271)", 6, 7,
    "Bh", "Bohrium", "(272)", 7, 7,
    "Hs", "Hassium", "(270)", 8, 7,
    "Mt", "Meitnerium", "(276)", 9, 7,
    "Ds", "Darmstadium", "(281)", 10, 7,
    "Rg", "Roentgenium", "(280)", 11, 7,
    "Cn", "Copernicium", "(285)", 12, 7,
    "Uut", "Unutrium", "(284)", 13, 7,
    "Fl", "Flerovium", "(289)", 14, 7,
    "Uup", "Ununpentium", "(288)", 15, 7,
    "Lv", "Livermorium", "(293)", 16, 7,
    "Uus", "Ununseptium", "(294)", 17, 7,
    "Uuo", "Ununoctium", "(294)", 18, 7
];

var camera, scene, renderer;
var controls;

var objects = [];
var targets = { table: [], sphere: [], helix: [], grid: [] };

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 3000;

    scene = new THREE.Scene();

    var imgIndex = 0
    // table

    for ( var i = 0; i < table.length; i += 5 ) {

        var element = document.createElement( 'div' );
        element.setAttribute('data-index', i)
        var img = document.createElement( 'img' );
        var imgSrc = `images/tb-webp/${imgFileNames[parseInt(Math.random() * MAX_IMG)]}-20.webp`
        img.className = 'tb-img';
        img.src = imgSrc;
        element.className = 'element';

        const $image = $(img)
        const reg = /(images\/tb-webp\/.*)-\d+\.webp/
        const newSrc = $image.attr('src').replace(reg,'$1') + '-100.webp'

        $image.viewer({
            url() {
                const mode = $('#high-mode').attr('data-mode')
                return mode === 'high' ? newSrc : $image.attr('src');
            },
            initialCoverage: 0.9,
            navbar: false,
            // button: false,
            title: false,
            toolbar: false,
            viewed: function() {
                if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
                    // 当前设备是移动设备
                    $image.viewer('zoomTo', 0.1);
                    return;
                }
                $image.viewer('zoomTo', 0.5);
            }
        });
		// element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';
        // element.style.background = `url('${imgSrc}')`;
        // element.style.backgroundSize = "120px";
        // element.style.opacity = .8;

        var number = document.createElement( 'div' );
        number.className = 'number';
        // number.textContent = (i/5) + 1;
        element.appendChild( number );
        element.appendChild(img);

        var symbol = document.createElement( 'div' );
        symbol.className = 'symbol';
        // symbol.textContent = table[ i ];
        element.appendChild( symbol );

        var details = document.createElement( 'div' );
        details.className = 'details';
        // details.innerHTML = table[ i + 1 ] + '<br>' + table[ i + 2 ];
        element.appendChild( details );

        var object = new THREE.CSS3DObject( element );
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;
        scene.add( object );

        objects.push( object );

        //

        var object = new THREE.Object3D();
        object.position.x = ( table[ i + 3 ] * 140 ) - 1330;
        object.position.y = - ( table[ i + 4 ] * 180 ) + 990;

        targets.table.push( object );

    }


    var vector = new THREE.Vector3();

    for ( var i = 0, l = objects.length; i < l; i ++ ) {

        var phi = Math.acos( -1 + ( 2 * i ) / l );
        var theta = Math.sqrt( l * Math.PI ) * phi;

        var object = new THREE.Object3D();

        object.position.x = 800 * Math.cos( theta ) * Math.sin( phi );
        object.position.y = 800 * Math.sin( theta ) * Math.sin( phi );
        object.position.z = 800 * Math.cos( phi );

        vector.copy( object.position ).multiplyScalar( 2 );

        object.lookAt( vector );

        targets.sphere.push( object );

    }

    // helix

    var vector = new THREE.Vector3();

    for ( var i = 0, l = objects.length; i < l; i ++ ) {

        var phi = i * 0.175 + Math.PI;

        var object = new THREE.Object3D();

        object.position.x = 900 * Math.sin( phi );
        object.position.y = - ( i * 8 ) + 450;
        object.position.z = 900 * Math.cos( phi );

        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;

        object.lookAt( vector );

        targets.helix.push( object );

    }

    // grid

    for ( var i = 0; i < objects.length; i ++ ) {

        var object = new THREE.Object3D();

        object.position.x = ( ( i % 5 ) * 400 ) - 800;
        object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
        object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

        targets.grid.push( object );

    }

    //

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.domElement.style.position = 'absolute';
    document.getElementById( 'container' ).appendChild( renderer.domElement );

    //

    controls = new THREE.TrackballControls( camera, renderer.domElement );
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener( 'change', render );

    var button = document.getElementById( 'table' );
    button.addEventListener( 'click', function ( event ) {

        transform( targets.table, 2000 );

    }, false );

    var button = document.getElementById( 'sphere' );
    button.addEventListener( 'click', function ( event ) {

        transform( targets.sphere, 2000 );

    }, false );

    var button = document.getElementById( 'helix' );
    button.addEventListener( 'click', function ( event ) {

        transform( targets.helix, 2000 );

    }, false );

    var button = document.getElementById( 'grid' );
    button.addEventListener( 'click', function ( event ) {

        transform( targets.grid, 2000 );

    }, false );

    transform( targets.table, 5000 );

    //

    window.addEventListener( 'resize', onWindowResize, false );

}

function transform( targets, duration ) {

    TWEEN.removeAll();

    for ( var i = 0; i < objects.length; i ++ ) {

        var object = objects[ i ];
        var target = targets[ i ];

        new TWEEN.Tween( object.position )
            .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
            .easing( TWEEN.Easing.Exponential.InOut )
            .start();

        new TWEEN.Tween( object.rotation )
            .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
            .easing( TWEEN.Easing.Exponential.InOut )
            .start();

    }

    new TWEEN.Tween( this )
        .to( {}, duration * 2 )
        .onUpdate( render )
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    render();

}

function animate() {

    requestAnimationFrame( animate );

    TWEEN.update();

    controls.update();

}

function render() {

    renderer.render( scene, camera );

}

