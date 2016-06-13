<?php

namespace App\Events;

use App\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class UserChangedActiveCell extends Event implements ShouldBroadcast
{
    use SerializesModels;

    public $rowIndex;
    public $columnIndex;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($rowIndex = -1, $columnIndex = -1)
    {
        $this->rowIndex = $rowIndex;
        $this->columnIndex = $columnIndex;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return ['clicked-cell-channel'];
    }
}
