import { Component, AfterContentInit } from '@angular/core';

const pac = require('ngx-select-ex/package.json');

const gettingStarted = require('html-loader!markdown-loader!../getting-started.md');

@Component({
  selector: 'demo-app',
  template: `
    <main class="bd-pageheader">
      <div class="container">
        <h1>ngx-select-ex v{{p?.version}}</h1>
        <p>Native Angular2 component for Select</p>
        <a class="btn btn-primary" href="https://github.com/optimistex/ngx-select-ex">View on GitHub</a>
        <div class="row">
          <div class="col-lg-1">
            <iframe src="https://ghbtns.com/github-btn.html?user=optimistex&repo=ngx-select-ex&type=star&count=true" frameborder="0"
                    scrolling="0" width="170px" height="20px"></iframe>
          </div>
          <div class="col-lg-1">
            <iframe src="https://ghbtns.com/github-btn.html?user=optimistex&repo=ngx-select-ex&type=fork&count=true" frameborder="0"
                    scrolling="0" width="170px" height="20px"></iframe>
          </div>
        </div>
      </div>
    </main>

    <div class="container">
      <section id="getting-started" [innerHtml]="gettingStarted"></section>

      <select-section class="col-md-12"></select-section>
    </div>

    <footer class="footer">
      <div class="container">
        <p class="text-muted text-center"><a href="https://github.com/optimistex/ngx-select-ex">ngx-select-ex</a> is maintained by <a
            href="https://github.com/optimistex">optimistex</a>.</p>
      </div>
    </footer>
  `
})
export class AppComponent implements AfterContentInit {
  public gettingStarted: string = gettingStarted;
  public p = pac;

  public ngAfterContentInit(): any {
    setTimeout(() => {
      if (typeof PR !== 'undefined') {
        // google code-prettify
        PR.prettyPrint();
      }
    }, 150);
  }
}
