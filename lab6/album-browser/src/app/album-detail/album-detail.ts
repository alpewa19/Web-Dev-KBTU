import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../services/album';
import { Album } from '../models/album';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css']
})
export class AlbumDetailComponent implements OnInit {

  album?: Album;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
    console.log('Album ID:', id);
  }

  save(): void {
    if (!this.album) return;

    this.albumService.updateAlbum(this.album).subscribe(() => {
      alert('Album updated!');
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
