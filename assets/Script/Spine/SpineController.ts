import { _decorator, Component, Node, Prefab, CCInteger, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpineController')
export class SpineController extends Component {

    @property(Prefab)
    peoplePrefab: Prefab = null


    @property(Node)
    peopleContainer: Node = null

    @property(CCInteger)
    peopleTotal: number = 0

    start() {
        this.loadPeople()
    }

    update(deltaTime: number) {

    }

    loadPeople() {
        for (let i = 0; i < this.peopleTotal; i++) {

            let peopleNode = instantiate(this.peoplePrefab)

            peopleNode.setPosition(-210 + Math.floor(i % 4) * 130, 570 - Math.floor(i / 4) * 48);

            this.peopleContainer.addChild(peopleNode);
        }
    }
}

