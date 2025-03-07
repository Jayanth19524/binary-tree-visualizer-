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
    { id: 8, children: [] },
    { id: 9, children: [] },
    { id: 10, children: [] },
    { id: 11, children: [] },
    { id: 12, children: [] },
    { id: 13, children: [] },
    { id: 14, children: [] },
    { id: 15, children: [] }
  ];
  

  getChildren(id: number): TreeNode[] {
    const node = this.binaryTree.find(n => n.id === id);
    return node ? node.children.map(childId => this.binaryTree.find(n => n.id === childId)!).filter(n => n) : [];
  }
}
