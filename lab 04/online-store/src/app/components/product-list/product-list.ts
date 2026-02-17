import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 13',
      description: 'Powerful Apple smartphone with A15 chip and excellent camera system.',
      price: 350000,
      rating: 4.8,
      image: 'https://shop.micro-gis.com/image/cache/webp/catalog/phone/iphone-13pro/iphone-13pro-sierra-blue_0-500x400.webp',
      images: [
        'https://shop.micro-gis.com/image/cache/webp/catalog/phone/iphone-13pro/iphone-13pro-sierra-blue_2-500x400.webp',
        'https://shop.micro-gis.com/image/cache/webp/catalog/phone/iphone-13pro/iphone-13pro-sierra-blue_4-500x400.webp',
        'https://shop.micro-gis.com/image/cache/webp/catalog/phone/iphone-13pro/iphone-13pro-sierra-blue_5-500x400.webp'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/'
    },

    {
      id: 2,
      name: 'Вантуз VNSHOP 11 см',
      description: 'Компактный сантехнический вантуз для прочистки труб и раковин. Подходит для бытового использования и прост в хранении.',
      price: 2500,
      rating: 4.3,
      image: 'https://th.bing.com/th/id/OIP.ORtv6DsfYbaTXcnSB5IvMwHaHa?w=185&h=185&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3',
      images: [
        'https://pngimg.com/uploads/plunger/plunger_PNG12.png',
        'assets/images/vantuz2.jpg',
        'assets/images/vantuz3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/vantuz-vnshop-11-sm-129849190/?c=750000000'
    },

    {
      id: 3,
      name: 'Кружка 300 мл керамическая',
      description: 'Классическая керамическая кружка для кофе или чая. Подходит для ежедневного использования дома или в офисе.',
      price: 1800,
      rating: 4.5,
      image: 'https://th.bing.com/th/id/OIP.JIWgNTryfUb_dzwM8KSVIQHaHa?o=7&cb=defcachec2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
      images: [
        'https://i.etsystatic.com/48630707/r/il/bc943b/5626411368/il_600x600.5626411368_r99a.jpg',
        'assets/images/mug.jpg',
        'assets/images/mug.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/kruzhka-683618-300-ml-keramika-115150436/?c=750000000'
    },

    {
      id: 4,
      name: 'Чехол iPhone 16 Pro Max',
      description: 'Прозрачный защитный чехол для смартфона Apple. Обеспечивает защиту от царапин и сохраняет оригинальный внешний вид устройства.',
      price: 3500,
      rating: 4.6,
      image: 'https://cdn1.ozone.ru/s3/multimedia-1-i/c600/7200750978.jpg',
      images: [
        'https://cdn1.ozone.ru/s3/multimedia-1-7/c600/7158319063.jpg',
        'assets/images/case.jpg',
        'assets/images/case.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-16-pro-max-prozrachnyi-124250944/?c=750000000'
    },

    {
      id: 5,
      name: 'Диван Morbido Komfort',
      description: 'Прямой диван с обивкой из микровелюра. Подходит для гостиной и обеспечивает комфортный отдых.',
      price: 250000,
      rating: 4.7,
      image: 'https://th.bing.com/th/id/OIP.f9np0IhhKvP3_zWhQnFreQHaD9?w=275&h=180&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3',
      images: [
        'https://th.bing.com/th/id/OIP.heaaEIqHI-VCcqfMiPXePQHaDn?w=285&h=170&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3',
        'assets/images/sofa.jpg',
        'assets/images/sofa.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/?c=750000000'
    },

    {
      id: 6,
      name: 'Лента ПВХ Terminator',
      description: 'Универсальная изоляционная лента для бытовых и ремонтных работ. Устойчива к влаге и механическим повреждениям.',
      price: 1200,
      rating: 4.2,
      image: 'https://th.bing.com/th/id/OIP.aY18tG0KVoEbkrJyIu7EvQHaE8?w=292&h=195&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3',
      images: [
        'https://th.bing.com/th/id/OIP.VT434WTqo3lWNpsY3JetywHaHa?w=196&h=195&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3',
        'assets/images/tape.jpg',
        'assets/images/tape.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/terminator-pvh-tsvet-chernyi-20-m-h-19-mm-106267743/?c=750000000'
    },

    {
      id: 7,
      name: 'Худи Qazaq Republic',
      description: 'Стильное черное худи с фирменным дизайном. Комфортный вариант для повседневной носки.',
      price: 28000,
      rating: 4.8,
      image: 'data:image/webp;base64,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',
      images: [
        'https://th.bing.com/th/id/OIP.kASXHMLh-fSleBP2UsX2PwHaJQ?w=208&h=260&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3',
        'assets/images/hoodie.jpg',
        'assets/images/hoodie.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/hudi-qazaq-republic-qr-chernyi-144873330/?c=750000000'
    },

    {
      id: 8,
      name: 'Кофемашина Hokura CM5520',
      description: 'Полуавтоматическая кофемашина для приготовления эспрессо и капучино дома. Оснащена функцией помола кофе и системой вспенивания молока.',
      price: 120000,
      rating: 4.6,
      image: 'https://th.bing.com/th/id/OIP.C-h4OVajzCRtG14sOU70AQAAAA?w=142&h=189&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3',
      images: [
        'https://th.bing.com/th/id/OIP.gXOVW09kHb6Nd_H-eSPdYAHaHa?w=189&h=189&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3',
        'assets/images/coffee.jpg',
        'assets/images/coffee.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/kofemashina-hokura-cm5520-chernyi-148648774/?c=750000000'
    },

    {
      id: 9,
      name: 'Матрас ортопедический',
      description: 'Ортопедический матрас с поддержкой позвоночника. Подходит для комфортного сна в любое время года.',
      price: 90000,
      rating: 4.7,
      image: 'https://th.bing.com/th/id/OIP.jscJyWGnx6_XAVYeUn88VQHaFj?w=251&h=188&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3',
      images: [
        'https://cdn1.ozone.ru/s3/multimedia-7/6466359091.jpg',
        'assets/images/mattress.jpg',
        'assets/images/mattress.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/matras-ortopedicheskii-matras-zima-leto-160x200x20-sm-108527136/?c=750000000'
    },

    {
      id: 10,
      name: 'Skin1004 пенка для умывания',
      description: 'Очищающая пенка для лица с мягкой формулой. Помогает удалить загрязнения и ухаживает за кожей.',
      price: 6500,
      rating: 4.5,
      image: 'https://th.bing.com/th/id/OIP.taeC8CNb43Tvae_de-sMIgHaI4?w=158&h=189&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3',
      images: [
        'https://th.bing.com/th/id/OIP.VMYIVeOQ4gjS8WSRHPF6-QHaHa?o=7&cb=defcachec2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
        'assets/images/skincare.jpg',
        'assets/images/skincare.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/skin1004-madagascar-centella-ampoule-penka-125-ml-104868246/?c=750000000'
    }

  ];

}
