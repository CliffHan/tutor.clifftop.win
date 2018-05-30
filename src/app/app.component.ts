import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kids Tutor';

  print(drawer) {
    // drawer.toggle().then(() => {window.print()});

    // console.log("I am printing");    
    // let printContents = document.getElementById("printarea").innerHTML;
    // var originalContents = document.body.innerHTML;

    // document.body.innerHTML = printContents;
    // window.print();
    // document.body.innerHTML = originalContents;
    // let printContents, popupWin;
    // printContents = document.getElementById('printarea').innerHTML;
    // popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    // popupWin.document.open();
    // popupWin.document.write(`
    //   <html>
    //     <head><title>Print tab</title><link rel="stylesheet" type="text/css" href="./app.component.css" /></head>
    //     <body>${printContents}</body>
    //   </html>`
    // );
    window.print();
    // drawer.toggle();
    // <body onload="window.print();window.close()">${printContents}</body>
    // popupWin.document.close();
  }
}
