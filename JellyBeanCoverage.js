const flavors = [
    'Lemon',
    'Pistachio',
    'Cantaloupe',
    'Pear',
    'Tangerine',
    'Apricot'
  ];
  
  const colors = [
    'Yellow',
    'Green',
    'Orange',
    'White'
  ];
  
  function testFlavors() {
    console.log("Test Cases for Flavors:");
    for (let i = 0; i < flavors.length; i++) {
      console.log("Taste " + flavors[i] + " Jelly Bean");
    }
  }
  
  function testColors() {
    console.log("\nTest Cases for Colors:");
    for (let i = 0; i < colors.length; i++) {
      console.log("Taste " + colors[i] + " Jelly Bean");
    }
  }
  
  function pairwiseTesting() {
    console.log("\nPairwise Test Cases (Flavor + Color combinations):");
    for (let i = 0; i < flavors.length; i++) {
      for (let j = 0; j < colors.length; j++) {
        console.log("Taste " + flavors[i] + " Jelly Bean (" + colors[j] + " color)");
      }
    }
  }
  
  testFlavors();
  testColors();
  pairwiseTesting();
  