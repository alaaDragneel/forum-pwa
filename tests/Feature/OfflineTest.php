<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class OfflineTest extends TestCase
{

    use RefreshDatabase;

    /** @test */
    public function it_returns_latest_threads_to_view_in_offline_mode ()
    {
        $thread = create('App\Thread');

        $this->get('/offline-home')
            ->assertSee($thread->title)
            ->assertSee($thread->body);


    }

}
