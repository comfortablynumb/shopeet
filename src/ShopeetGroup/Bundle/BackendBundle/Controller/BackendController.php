<?php
namespace ShopeetGroup\Bundle\BackendBundle\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class BackendController extends Controller
{
    public function indexAction()
    {
        return $this->render('Backend:Backend:index.html.twig', array());
    }
}
