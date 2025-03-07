import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface TreeNode {
  id: number;
  children: number[];
}

@Component({
  selector: 'app-tree',
  standalone:true,
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  imports:[CommonModule]
})
export class TreeComponent {
  binaryTree: TreeNode[] = [
    { id: 1, children: [2, 3] },
    { id: 2, children: [4, 5] },
    { id: 3, children: [6, 7] },
    { id: 4, children: [8, 9] },
    { id: 5, children: [10, 11] },
    { id: 6, children: [12, 13] },
    { id: 7, children: [14, 15] },
    { id: 8, children: [16, 17] },
    { id: 9, children: [18, 19] },
    { id: 10, children: [20, 21] },
    { id: 11, children: [22, 23] },
    { id: 12, children: [24, 25] },
    { id: 13, children: [26, 27] },
    { id: 14, children: [28, 29] },
    { id: 15, children: [30, 31] },
    { id: 16, children: [] },
    { id: 17, children: [] },
    { id: 18, children: [] },
    { id: 19, children: [] },
    { id: 20, children: [] },
    { id: 21, children: [] },
    { id: 22, children: [] },
    { id: 23, children: [] },
    { id: 24, children: [] },
    { id: 25, children: [] },
    { id: 26, children: [] },
    { id: 27, children: [] },
    { id: 28, children: [] },
    { id: 29, children: [] },
    { id: 30, children: [] },
    { id: 31, children: [] }
  ];
  

  getChildren(id: number): TreeNode[] {
    const node = this.binaryTree.find(n => n.id === id);
    return node ? node.children.map(childId => this.binaryTree.find(n => n.id === childId)!).filter(n => n) : [];
  }
}
