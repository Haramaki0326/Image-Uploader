@foreach($images as $image)
    <div>
        <img src="{{ asset('storage/' . $image->image) }}" alt="image" style="width: 30%; height: auto;"/>
    </div>
@endforeach