<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */

     public function index()
    {
        //
        $images = Product::all();
        $imgs = $images->map(function ($img) {
            $imgArray = $img->toArray();
            $imgArray['image'] = url('dest/' . $img->image);
            return $imgArray;
        })->toArray();
        return response()->json($imgs, 200, [], JSON_UNESCAPED_SLASHES);

    }
    public function addtocart($id)
    {
        $user = auth()->user();
        $userId = $user ? $user->id : null;
        $cart = new Cart();
        $cart->user_id = $userId;
        $cart->product_id = $id;
        $cart->save();
        return response()->json(['message'=>'success'], 200, [], JSON_UNESCAPED_SLASHES);
    }
    // public function index()
    // {
    //     $imagenames = Product::pluck('image');
    //     // $imagenames = ["image_buao.jpg","image_apbl.jpg","image_ffgx.jpg","image_sfsi.jpg","image_kzkf.jpg","image_ehet.jpg","image_uljq.jpg","image_zmga.jpg","image_ywaf.jpg","image_izhl.jpg","image_snzh.jpg","image_ltdi.jpg","image_clwr.jpg","image_yuda.jpg","image_iyuv.jpg","image_dkam.jpg","image_imrp.jpg","image_dqer.jpg","image_xsjl.jpg","image_xuhr.jpg"];
    //     // echo count($imagenames);die;

    //         $sourceFiles = \Illuminate\Support\Facades\File::files(public_path('source'));
    //             $sourcePath = $sourceFiles[0]->getPathname();
    //             // echo public_path('dest\\' . "image_xuhr.jpg");echo "<br>";
    //             // echo $sourcePath;die;
    //     foreach ($imagenames as $imagename) {
    //         $sourceFiles = \Illuminate\Support\Facades\File::files(public_path('/source'));
    //         if (!empty($sourceFiles)) {
    //             $sourcePath = $sourceFiles[0]->getPathname();
    //             $destinationPath = public_path('dest/' . $imagename);
    //             if (\Illuminate\Support\Facades\File::exists($sourcePath)) {
    //                 \Illuminate\Support\Facades\File::move($sourcePath, $destinationPath);
    //                 $images[] = $imagename;
    //             }
    //         }
    //     }
    //     return response()->json($images);

    // }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
