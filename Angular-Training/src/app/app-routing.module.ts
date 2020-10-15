import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Routing1Component} from './routing1/routing1.component'
import {Routing2Component} from './routing2/routing2.component'
import { Routing3Component } from './routing3/routing3.component';
import { Child2Component } from './routing3/child2/child2.component';
import { Child3Component } from './routing3/child3/child3.component';
import { Child4Component } from './routing3/child4/child4.component';
import { Child1Component } from './routing3/child1/child1.component';
import { Routing4Component } from './routing4/routing4.component';
import { Routing5Component } from './routing5/routing5.component';
import { Routing6Component } from './routing6/routing6.component';
import { Child4_2Component } from './routing4/child4_2/child4_2.component';
import { Child4_3Component } from './routing4/child4_3/child4_3.component';
import { Child4_4Component } from './routing4/child4_4/child4_4.component';
import { Child4_1Component } from './routing4/child4_1/child4_1.component';

const routes: Routes = [
  { path: '', redirectTo: '/routing1', pathMatch: 'full' },
  {path:'routing1',component:Routing1Component},
  {path:'routing2',component:Routing2Component},
  {path:'routing3',component:Routing3Component,
  children : [
    {path:'child1',component:Child1Component},
    {path:'child2',component:Child3Component},
    {path:'child3',component:Child3Component},
    {path:'child4',component:Child4Component}
  ]
  },
  {path:'routing4',component:Routing4Component,
  children : [
    {path:'child4_1',component:Child4_1Component},
    {path:'child4_2',component:Child4_2Component},
    {path:'child4_3',component:Child4_3Component},
    {path:'child4_4',component:Child4_4Component}
  ]

  },
  {path:'routing5',component:Routing5Component},
  {path:'routing6',component:Routing6Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

export const routingComponents = [Routing1Component,Routing2Component,Child1Component,
  Routing3Component,Child2Component,Child3Component,Child4Component,Routing4Component,
  Child4_2Component,Child4_3Component,Child4_4Component,Child4_1Component,Routing5Component,
  Routing6Component
]
